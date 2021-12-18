from brownie import Contract, config, network, interface
from brownie.network import account

from scripts.utils import get_account
from loguru import logger

def redeem():
    bonds = config["networks"][network.show_active()]["bonds"]
    for bond, address in bonds.items():
        balance = interface.IBond(address).pendingPayoutFor(get_account())
        if balance < 1000:
            continue
        formatted = f"{balance / 10 ** 9:.9f}"
        logger.info(f"Redeeming {formatted} WAGMI from {bond}")
        interface.IBond(address).redeem(get_account(), True, {"from": get_account()})