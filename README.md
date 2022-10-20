## Treasure Hunter

This is a prototype for a decentralized user management system.

The prototype should support the following functions:

-   user management (create, ban, update role, update password)
-   session monitoring and management (monitor login sessions, block existing user session)
-   role based access permissions

## Deployment

This project is deployed to Railway at the following url:
https://user-profile-dapp-production.up.railway.app

## Local Development

Please ensure that you have node installed on your computer.

To run the development server:

```bash
npm install
npm run dev
```

## Environment Variables

```
API_URL=https://eth-goerli.g.alchemy.com/v2/<Alchemy API URL>
API_KEY=<Alechmy API Key>
PRIVATE_KEY=<WALLET PRIVATE KEY>
CONTRACT_ADDRESS=<USERS SMART CONTRACT ADDRESS>
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hardhat

Hardhat commands:

```shell
npx hardhat help
npx hardhat test
npx hardhat compile
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
