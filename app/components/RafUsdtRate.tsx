"use client";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import usdtLogo from "../../public/images/tether-usdt-logo.png";
import { useStateContext } from "../context";

const RafUsdtRate = () => {
  const { rafPrice } = useStateContext();
  return (
    <div
      className={
        "flex mt-3 px-5 flex-col gap-2 min-[450px]:flex-row min-[450px]:gap-6  min-[450px]:items-center"
      }
    >
      <div className={"flex flex-row gap-1  items-center"}>
        <div className={"w-[35px] h-[33px] sm:w-[69px] sm:h-[65px]"}>
          <Image
            src={Logo}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="Raise Africa Logo"
          />
        </div>
        <div>
          <span className={"text-lg mr-2 sm:text-2xl font-bold"}>RAF</span>
          <span className={"text-lg sm:text-2xl font-bold text-secondary"}>
            Token
          </span>
        </div>
      </div>
      <span
        className={"text-2xl px-16 min-[450px]:px-0 sm:text-3xl font-extrabold"}
      >
        =
      </span>
      <div className={"flex flex-row gap-3  items-center"}>
        <div className={"w-[30px] h-[30px] sm:w-[62px] sm:h-[62px]"}>
          <Image
            src={usdtLogo}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="Tether USDT Logo"
          />
        </div>
        <div>
          <span className={"text-lg text-primary mr-2 sm:text-2xl font-bold"}>
            {rafPrice} USDT
          </span>
        </div>
      </div>
    </div>
  );
};

export default RafUsdtRate;
