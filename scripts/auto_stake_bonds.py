import sys, traceback
import time
from brownie import accounts, network, config, Contract, Distributor
from scripts.redeem import redeem

def main():
    try:
        autobond()
    except KeyboardInterrupt:
        print("Shutdown requested...exiting")
    except Exception:
        traceback.print_exc(file=sys.stdout)
    sys.exit(0)

def autobond():
    wagmi = Contract.from_abi("Distributor", config["networks"][network.show_active()]["StakingDistributor"], Distributor.abi)
    print(wagmi.nextEpochTime())
    redeem()
    while True:
        if int(time.time() + 120) >= wagmi.nextEpochTime():
            pass
        else:
            time.sleep(30)