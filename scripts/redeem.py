from brownie import Contract, config, network, interface

from scripts.utils import get_account

def redeem():
    bonds = config["networks"][network.show_active()]["bonds"]
    for bond, address in bonds.items():
        balance = interface.IBond(address).pendingPayoutFor(get_account())
        print(balance / 10 ** 9)