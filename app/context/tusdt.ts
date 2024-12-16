import { getContract } from "thirdweb";
import { defineChain } from "thirdweb";
import { client } from "../constants";
import { ethers } from "ethers";
import { BUY_RAF_ABI } from "./BUY_RAF_ABI";
import { BUY_RAF_ADDRESS } from "./raf";

const sepolia = defineChain({
  id: 11155111,
  rpc: "https://ethereum-sepolia-rpc.publicnode.com",
});
export const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: sepolia,
  // the contract's address
  address: "0xc7c2D2f7338AC9877BD17031bAf7bD260a767bC7",
});
