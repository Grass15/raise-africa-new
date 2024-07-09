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
export const ButtonConnectNoDetails = ({ text }) => {
  const { client, wallet } = useStateContext();
  return (
    <div className={"btn btn-sm text-sm btn-primary sm:text-base sm:btn-md "}>
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
          label: text,
          style: {
            all: "unset",
          },
        }}
        connectModal={{
          size: "compact",
          showThirdwebBranding: false,
        }}
      />
    </div>
  );
};
