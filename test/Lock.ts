import { ethers } from "hardhat";

describe("hello world", function () {
    it("test contract", async function () {
        const helloworld = await ethers.getContractFactory("HelloWorld");

        const helloworldContract = await helloworld.deploy();
        console.log("contract address: ", helloworldContract.address);
    });
});
