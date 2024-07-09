"use client";
import Image from "next/image";
import { ButtonConnect } from "./ButtonConnect";
import BuyModal from "./BuyModal";
import Link from "next/link";
import { ButtonConnectNoDetails } from "./ButtonConnectNoDetails";
import { useStateContext } from "../context";
import { toast } from "react-toastify";
// @ts-ignore
const Card = ({
  background,
  icon,
  title,
  description,
  buttonText,
  forConnect = false,
  forBuy = false,
  forCampaign = false,
}) => {
  const { account } = useStateContext();
  const showWarning = (e) => {
    e.preventDefault();
    toast.warning("You are already connected!", {
      position: "top-center",
      theme: "dark",
    });
  };
  return (
    <div
      className={
        "flex flex-col gap-6 items-center py-8 rounded w-[271px]  max-[350px]:w-[200px] max-[350px]:gap-4 max-[350px]:py-4 "
      }
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={"w-20 h-20 max-[350px]:w-10 max-[350px]:h-10"}>
        <Image
          src={icon}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="Card Icon"
        />
      </div>
      <h4 className={"text-xl max-[350px]:text-base font-medium tracking-wide"}>
        {title}
      </h4>
      <p className={"text-xs w-3/4 text-[#7D7D7D] text-center"}>
        {description}
      </p>
      {forConnect && account == undefined ? (
        <ButtonConnectNoDetails text={buttonText} />
      ) : forBuy ? (
        <BuyModal text={"Buy"} />
      ) : forCampaign ? (
        <Link
          className={`btn btn-primary font-medium max-[350px]:btn-sm`}
          href={"/campaigns"}
        >
          Campaigns
        </Link>
      ) : (
        <button
          onClick={showWarning}
          className="btn btn-primary font-medium max-[350px]:btn-sm"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
