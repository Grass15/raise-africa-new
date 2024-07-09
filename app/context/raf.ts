import { getContract } from "thirdweb";
import { defineChain } from "thirdweb";
import { client } from "../constants";
import { ethers } from "ethers";
import { BUY_RAF_ABI } from "./BUY_RAF_ABI";
const bsc = defineChain({ id: 56, rpc: "https://bsc-dataseed.binance.org/" });
export const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: bsc,
  // the contract's address
  address: "0x2c77D3161533129cA2c8745B6e4ED345c3EDf96d",
});

const sepolia = defineChain({
  id: 11155111,
  rpc: "https://ethereum-sepolia-rpc.publicnode.com",
});

export const BUY_RAF_ADDRESS = "0x6168D9754Db06A16EB87398Ac9481C536e540C5d";
export const priceContract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: sepolia,
  // the contract's address
  address: "0xA4ECCFeF6b789f09CcB1b723c514DE42a9BB3176",
});

// export const buyContract = getContract({
//   // the client you have created via `createThirdwebClient()`
//   client,
//   // the chain the contract is deployed on
//   chain: bsc,
//   // the contract's address
//   address: "0x6168D9754Db06A16EB87398Ac9481C536e540C5d",
//   // the contract's abi
// });

export const buyContract = () => {
  //@ts-ignore
  if (typeof window !== "undefined" && window.ethereum) {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(BUY_RAF_ADDRESS, BUY_RAF_ABI, signer);
  } else {
    console.log("Ethereum object not found");
    return null;
  }
};
