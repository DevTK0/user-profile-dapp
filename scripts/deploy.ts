import { ethers } from "hardhat";

async function main() {
    const users = await ethers.getContractFactory("Users");
    const usersContract = await users.deploy();

    console.log("Users deployed to:", usersContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
