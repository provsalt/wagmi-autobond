import { ethers } from "hardhat";
import { Logger } from "tslog";
const addresses = require("../addresses.json");

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

async function main() {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts();
  log.info("You're currently using the following account:" + accounts[0]);
  const StakingDistributorAddress = addresses.StakingDistributor;
  const StakingDistributor = await ethers.getContractFactory(
    "StakingDistributor"
  );
  const stakingDistributor = await StakingDistributor.attach(
    StakingDistributorAddress
  );
  // Check every 20 second or RIP CPU
  setInterval(async () => {
    const epoch = await stakingDistributor.nextEpochTime();
    const time = new Date().valueOf() / 1000;
    // This is abit inefficient however it's 12am and I'm braindead atm
    if (time > epoch - 60) {
      log.info("Rebasing soon, redeeming bonds.");
      redeem(accounts[0]);
    } else {
      log.debug(
        "Rebasing in " + ((epoch - time) / 60 / 60).toFixed(1) + " hours."
      );
    }
  }, 20000);
}

async function redeem(account: string) {
  for (let bond in addresses.bonds) {
    log.info("Redeeming bond " + bond);
    const BondAddress = addresses.bonds[bond];
    const BondDepository = await ethers.getContractFactory("BondDepository");
    const bondDepository = await BondDepository.attach(BondAddress);
    const bondBalance = await bondDepository.pendingPayoutFor(account);
    if (bondBalance > 1) {
      // the boolean argument is whether to auto stake for the user.
      await bondDepository.redeem(account, true);
      log.info("Redeemed " + bondBalance + " for " + bond);
    }
  }
}

main()
  // .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
