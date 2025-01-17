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
  address: "0x713a8d9528996cD5bB6208d38Eb0715386190108",
});
