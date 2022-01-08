import os
import sys, traceback
import time
from brownie import network, config, Contract, Distributor, accounts
from loguru import logger
from requests import ConnectionError
import rncryptor
from getpass import getpass
from scripts.redeem import redeem
from scripts.utils import get_account, set_key

logger.remove()
logger.add(sys.stdout, colorize=True, format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> <blue>{level}</blue> <level>{message}</level>")
cryptor = rncryptor.RNCryptor()

def main():
    try:
        if os.path.isfile(".secrets") == False:
            key = input("Enter your private key: ")
            passwd = getpass("Enter a password to securely store your private key: ")
            hash = cryptor.encrypt(key, passwd)
            with open(".secrets", "wb") as f:
                f.write(hash)
        else: 
            password_prompt = getpass("Please enter your password to continue: ")
            with open(".secrets", "rb") as f:
                hash = f.read()
                key = cryptor.decrypt(hash, password_prompt)
                # kinda bad practice to set this in memory tbh but what are the chances of a memory dump happening?
                set_key(key)
        logger.info("Currently using account: " + get_account().address)
        autobond()
    except KeyboardInterrupt:
        logger.warning("Exiting...")
    except ConnectionError:
        logger.error("Unable to get blockchain data due to a connection error")
    except Exception:
        traceback.print_exc(file=sys.stdout)
    sys.exit(0)

def autobond():
    wagmi = Contract.from_abi("Distributor", config["networks"][network.show_active()]["StakingDistributor"], Distributor.abi)
    while True:
        if int(time.time() + 60) >= wagmi.nextEpochTime():
            redeem()
        else:
            logger.debug("Rebasing in " + str(round((wagmi.nextEpochTime() - int(time.time())) / 3600, 1)) + " hour")
            time.sleep(30)