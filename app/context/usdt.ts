import { getContract } from "thirdweb";
import { defineChain } from "thirdweb";
import { client } from "../constants";
import { ethers } from "ethers";
import { BUY_RAF_ABI } from "./BUY_RAF_ABI";
import { BUY_RAF_ADDRESS } from "./raf";

const bsc = defineChain({ id: 56, rpc: "https://bsc-dataseed.binance.org/" });
export const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: bsc,
  // the contract's address
  address: "0x55d398326f99059fF775485246999027B3197955",
});
