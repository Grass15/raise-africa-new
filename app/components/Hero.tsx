"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { useStateContext } from "../context";
import BuyModal from "./BuyModal";

const Hero = () => {
  const { account } = useStateContext();
  return (
    <div className="grid max-w-screen-lg px-5 pb-5 mx-auto sm:gap-5 xl:gap-0  sm:grid-cols-12">
      <div className="mr-auto flex flex-col gap-2 place-self-center sm:col-span-6">
        <h1 className="max-w-lg mb-5 text-4xl font-extrabold tracking-wide leading-10 md:text-5xl xl:text-6xl lora-title">
          Invest in <span className={"text-primary"}>African Businesses </span>{" "}
          to Foster
          <span className={"text-primary"}> Growth</span>
        </h1>
        <p className="max-w-xl mt-3 mb-3 leading-8 sm:mb-5 dark:text-gray-400">
          The first crowdfunding platform in Africa enabling any company,
          whether a startup or not, to raise funds through blockchain. Invest in
          impactful projects across various industries, whether related to
          blockchain/web3 or not, and contribute to Africa’s development.
        </p>
        <div className={"flex flex-row gap-2 sm:gap-6"}>
          {}
          {/*<Link*/}
          {/*  href="#"*/}
          {/*  className="btn btn-sm sm:btn-md btn-primary mr-3 font-medium "*/}
          {/*>*/}
          {/*  Get started*/}
          {/*</Link>*/}
          <BuyModal text={"Buy"} />
          <Link
            href="/how-it-works"
            className="btn btn-sm sm:btn-md btn-outline btn-primary mr-3 font-medium "
          >
            How it Works
          </Link>
        </div>
      </div>
      <div className="hidden sm:ml-6 lg:mt-0 sm:col-span-6 sm:flex sm:items-center ">
        {/*<Image src={Logo} width={260} height={200} alt="Crypto Wallet Icon" />*/}
        <div style={{ width: 255, height: 270 }}>
          <Image
            src={Logo}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="Raise Africa Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
