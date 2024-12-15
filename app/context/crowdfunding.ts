import { getContract } from "thirdweb";
import { defineChain } from "thirdweb";
import { client } from "../constants";

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
  address: "0x6f7dC6674c31Ed430B4Eb6b517CEb9a51b14A1bD",
});
