## WAGMI Autostake
Autostake all your wagmi bonds just before rebase

### Instructions

1. Download [brownie](https://github.com/eth-brownie/brownie)

2. Add harmony shard 0 network
```bash
brownie networks add Harmony Shard0 host=https://api.harmony.one chainid=1666600000 explorer=https://explorer.harmony.one/ 
```
3. make an .env file with your private key formatted like this
```env
PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE
```
4. Run the script
```bash
brownie run scripts/auto_stake_bonds.py
```
