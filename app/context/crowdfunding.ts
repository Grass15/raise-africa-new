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
  address: "0x6208C686A77e9fa527c4eCbF974c4BCB6a7e9F16",
});
