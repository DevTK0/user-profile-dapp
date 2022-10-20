// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
import * as contract from "../../artifacts/contracts/Users.sol/Users.json";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY: BytesLike = process.env.PRIVATE_KEY!;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const provider = new ethers.providers.AlchemyProvider("goerli", API_KEY);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const users = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

    const { username, password } = req.body;

    const loginTx = await users.login(username, password);
    const result = await loginTx.wait();
    const session = result.events[0].args.value;

    if (session === "0x0000000000000000000000000000000000000000") {
        return res.status(401).json({ message: `Login failed` });
    }

    return res
        .status(200)
        .json({ message: `${username} logged in`, session: session });
}
