import sys, traceback
import time
from brownie import network, config, Contract, Distributor
from loguru import logger
from scripts.redeem import redeem
from scripts.utils import get_account

logger.remove()
logger.add(sys.stdout, colorize=True, format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> <blue>{level}</blue> <level>{message}</level>")

def main():
    try:
        logger.info("Currently using account: " + get_account().address)
        autobond()
    except KeyboardInterrupt:
        logger.warning("Exiting...")
    except Exception:
        traceback.print_exc(file=sys.stdout)
    sys.exit(0)

def autobond():
    wagmi = Contract.from_abi("Distributor", config["networks"][network.show_active()]["StakingDistributor"], Distributor.abi)
    while True:
        if int(time.time() + 120) >= wagmi.nextEpochTime():
            redeem()
        else:
            logger.debug("Rebasing in " + str(round((wagmi.nextEpochTime() - int(time.time())) / 3600, 1)) + " hour")
            time.sleep(30)