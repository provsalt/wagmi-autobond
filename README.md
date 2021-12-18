<<<<<<< HEAD
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
=======
# Wagmi autobond
This projects helps people using OHM forks like wagmi auto stake their bonds every few hours just before rebase. I decided to make one for euphoria since I'm pretty active in the harmony network.

### Instructions
1. Clone the repository
2. npm install / yarn install
3. Create an .env file and add your private key with this format
```env
PRIVATE_KEY=YOUR_KEY_HERE
```
4. Run npx run scripts/autostake_wagmi.ts
5. Leave it on and enjoy

### Screenshots
![Demo 1](./images/demo1.png)

![Demo 2](./images/demo2.png)
>>>>>>> c88bf286695d545e26af50cc2540d5fab530dca8
