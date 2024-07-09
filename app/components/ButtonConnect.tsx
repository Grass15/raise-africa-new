"use client";
import { ThirdwebProvider, ConnectButton, darkTheme } from "thirdweb/react";
import { useStateContext } from "../context";
import Image from "next/image";
import WalletIcon from "../../public/images/home/digital-wallet.png";
import { createWallet, walletConnect } from "thirdweb/wallets";
const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  walletConnect(),
];

const signInButton = {};
// @ts-ignore
export const ButtonConnect = ({ simple }) => {
  const { client, wallet } = useStateContext();
  return (
    <div
      className={
        "btn btn-sm btn-primary text-xs " +
        (simple ? "btn-ghost underline font-bold" : "sm:text-base sm:btn-md")
      }
    >
      <Image
        className={simple ? "hidden" : "hidden sm:flex"}
        src={WalletIcon}
        width={34}
        alt="Crypto Wallet Icon"
      />
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={darkTheme({
          colors: {
            modalBg: "#000",
            accentText: "#FFC917",
            accentButtonBg: "#FFC917",
            borderColor: "#FFC917",
            separatorLine: "#FFC917",
            primaryButtonBg: "",
          },
        })}
        connectButton={{
          label: "Connect",
          style: {
            all: "unset",
          },
        }}
        connectModal={{
          size: "compact",
          showThirdwebBranding: false,
        }}
        detailsButton={{
          displayBalanceToken: {
            1: "0x55d398326f99059ff775485246999027b3197955",
          },
          // render: () => (
          //   <div className="avatar">
          //     <div className="w-10 rounded-full">
          //       <img
          //         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          //         alt={"Profile image"}
          //       />
          //     </div>
          //   </div>
          // ),
        }}
        supportedTokens={{
          // when connected to "Base" mainnet - show balance of DAI stablecoin
          84532: [
            {
              address: "0x2c77D3161533129cA2c8745B6e4ED345c3EDf96d", // token contract address
              name: "Dai Stablecoin",
              symbol: "RAF",
              icon: "https://assets.coingecko.com/coins/images/9956/small/Badge_Dai.png?1687143508",
            },
          ],
        }}
      />
    </div>
  );
};
