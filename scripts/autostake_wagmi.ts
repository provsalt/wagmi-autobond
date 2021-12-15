import { ethers } from "hardhat";
import { Logger } from "tslog";
import addresses from "../addresses.json";
import YAML from "yaml";
import fs from "fs";

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

async function main() {
  const cfg = YAML.parse(fs.readFileSync("config.yml", "utf8"));
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts();
  if (!accounts.length) {
    throw new Error("No accounts found. Please add your private key.");
  }
  log.info("You're currently using the following account: " + accounts[0]);
  cfg.wrapping.enabled &&
    log.warn("Wrapping is enabled, this is an experimental feature.");

  const StakingDistributorAddress = addresses.StakingDistributor;
  const StakingDistributor = (
    await ethers.getContractFactory("StakingDistributor")
  ).attach(StakingDistributorAddress);
  // Check every 20 second or RIP CPU
  setInterval(async () => {
    const epoch = await StakingDistributor.nextEpochTime();
    const time = new Date().valueOf() / 1000;
    // This is abit inefficient however it's 12am and I'm braindead atm
    if (time > epoch - 60) {
      log.info("Rebasing soon, redeeming bonds.");
      redeem(accounts[0], cfg);
    } else {
      log.debug(
        "Rebasing in " + ((epoch - time) / 60 / 60).toFixed(1) + " hours."
      );
    }
  }, 20000);
}

async function redeem(account: string, cfg: any) {
  let totalBalance = 0;
  for (const bond in addresses.bonds) {
    log.info("Redeeming bond " + bond);
    const BondAddress = addresses.bonds[bond];
    const BondDepository = await ethers.getContractFactory("BondDepository");
    const bondDepository = await BondDepository.attach(BondAddress);
    const bondBalance = await bondDepository.pendingPayoutFor(account);
    if (bondBalance > 1000) {
      totalBalance += bondBalance;
      // the boolean argument is whether to auto stake for the user.
      await bondDepository.redeem(account, true);
      // ERC20 uses the uint256 * 10 ** decimals function as there are no floating point numbers in solidity
      log.info("Redeemed " + bondBalance / (10 ^ 9) + " sWAGMI for " + bond);
    }
  }
  !cfg.wrapping.enabled &&
    log.info("Redeemed " + totalBalance / (10 ^ 9) + " sWAGMI");

  // If wrapping is enabled, we need to wrap the tokens
  if (cfg.wrapping.enabled) {
    const wsWAGMI = (await ethers.getContractFactory("wsWAGMI")).attach(
      addresses.wsWAGMI
    );
    wsWAGMI.approve(addresses.wsWAGMI, totalBalance);
    wsWAGMI.wrap(account, totalBalance);
  }

  cfg.wrapping.pool !== "none" && poolTokens();
}

async function poolTokens() {
    
}

main()
  // .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
