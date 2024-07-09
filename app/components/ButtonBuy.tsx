import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../context";
import WalletIcon from "../../public/images/home/digital-wallet.png";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import buttonDisconnect from "./ButtonDisconnect";

// @ts-ignore
const ButtonBuy = ({ simple, text }) => {
  return (
    <>
      {text && text != "" ? (
        <div
          className={
            "btn btn-sm sm:btn-md btn-primary mr-3 font-medium cursor-pointer"
          }
        >
          {text}
        </div>
      ) : (
        <div className={"flex flex-row items-center justify-center"}>
          <div className="py-1 px-3 gap-2 flex flex-row text-primary border border-primary items-center rounded-full hover:bg-primary hover:text-black cursor-pointer">
            <span className={"font-semibold"}>BUY</span>
            <Image src={Logo} width={30} alt="Raise Africa Token" />
          </div>
        </div>
      )}
    </>
  );
};
export default ButtonBuy;
