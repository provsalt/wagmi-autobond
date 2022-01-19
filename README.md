## Wagmi Autobond
Automatically stake all your wagmi bonds just before rebase

This program is compatible with most of other rebase tokens. However it will require you to change the contract addresses in brownie-config,yaml.
Here is a list of compatible rebase tokens that I've checked.

Wonderland, Snowbank, OneDao

PSA; Please set the minimum amount on high gas networks as it'll cost you quite alot of fee's if you don't

### Instructions

1. Download [brownie](https://github.com/eth-brownie/brownie), Use pip instead of pipx

2. Add harmony shard 0 network
```bash
brownie networks add Harmony Shard0 host=https://api.harmony.one chainid=1666600000 explorer=https://explorer.harmony.one/ 
```

OR Add Harmony POKT network

```bash
brownie networks add Harmony POKT host=https://harmony-0-rpc.gateway.pokt.network chainid=1666600000 explorer=https://explorer.harmony.one/ 
```

3. Run pip install -r requirements.txt

4. Run the scripts

```bash
brownie run scripts/auto_stake_bonds.py --network Shard0
```

OR POKT
```bash
brownie run scripts/auto_stake_bonds.py --network POKT
```

5. Enter your private key and a password to encrypt it

The seed phrase will be visible however the password won't be but I'll perhaps add that to the private key

You can search where you could get your private key for your wallet. I'll reccomend using a new wallet if you don't trust me. After all, we're all satoshi.

### Donations
Would be nice to get a little donation to my address if you enjoy my program, ``one10n5yjj2jjq2a2k3knwsaev0qnxcm8mscfupy2m``since I don't charge a dime to use this program

### Screenshots
![Screenshot](./images/screenshot1.png)

![Screenshot](./images/screenshot2.png)
