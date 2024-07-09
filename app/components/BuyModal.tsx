"use client";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import ButtonDisconnect from "./ButtonDisconnect";
import ButtonBuy from "./ButtonBuy";
import Logo from "../../public/images/logo.png";
import { useState } from "react";
import usdtLogo from "../../public/images/tether-usdt-logo.png";
import { useStateContext } from "../context";
import { toast } from "react-toastify";

const BuyModal = ({ text = "" }) => {
  const { rafBalance, isConnected, usdtBalance, rafPrice, buyRaf } =
    useStateContext();
  const [usdtAmount, setUsdtAmount] = useState(0);
  const [rafAmount, setRafAmount] = useState(0);
  const handleUsdtInput = (e) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setUsdtAmount(inputValue);
      setRafAmount(Number((inputValue / rafPrice).toFixed(4)));
    }
  };
  const handleRafInput = (e) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setRafAmount(inputValue);
      setUsdtAmount(Number((inputValue * rafPrice).toFixed(4)) + 1);
    }
  };
  const buy = () => {
    if (isConnected) {
      buyRaf(usdtAmount, rafAmount);
    } else {
      toast.error("Please Connect Your wallet first!", {
        position: "top-center",
        theme: "dark",
      });
    }
  };
  return (
    <>
      <label htmlFor="raf_buying_modal">
        <ButtonBuy simple={false} text={text} />
      </label>
      <input type="checkbox" id="raf_buying_modal" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box rounded-xl border border-primary px-3 w-auto items-center min-w-52">
          <label
            htmlFor="raf_buying_modal"
            className={
              "right-3 top-2 absolute text-xl p-2 font-bold cursor-pointer"
            }
          >
            x
          </label>
          <div
            className={
              "w-full flex flex-col justify-between items-center mt-5 p-3"
            }
          >
            <div className="w-full flex flex-col gap-3 bg-[#222221] p-3 rounded-xl mt-3">
              <div
                className={
                  "flex flex-row gap-2 items-center bg-black p-3 rounded-full w-fit"
                }
              >
                <div className={"w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"}>
                  <Image
                    src={Logo}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="Tether USDT Logo"
                  />
                </div>
                <div>
                  <span className={" text-primary mr-2 text-lg font-bold"}>
                    RAF
                  </span>
                </div>
              </div>
              <div
                className={"flex flex-row justify-between items-center mt-5"}
              >
                <input
                  className="appearance-none bg-transparent border-none w-full text-2xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="52.5"
                  aria-label="RAF Amount"
                  value={rafAmount}
                  onChange={(e) => handleRafInput(e)}
                />
                <div className={"whitespace-nowrap text-secondary"}>
                  Balance: {rafBalance}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-[#222221]  gap-5 px-3 pb-3 rounded-xl mt-2">
              <div className={"w-full flex flex-row justify-center -mt-6"}>
                <div className={"w-9 h-9 bg-primary rounded-full"}></div>
              </div>
              <div
                className={
                  "flex flex-row gap-2 items-center bg-black p-3 rounded-full w-fit"
                }
              >
                <div className={"w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"}>
                  <Image
                    src={usdtLogo}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="Tether USDT Logo"
                  />
                </div>
                <div>
                  <span className={"text-lg text-primary mr-2 font-bold"}>
                    USDT
                  </span>
                </div>
              </div>
              <div className={"flex flex-row justify-between items-center"}>
                <input
                  className="appearance-none bg-transparent border-none w-full text-2xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="52.5"
                  aria-label="Usdt Amount"
                  value={usdtAmount}
                  onChange={(e) => handleUsdtInput(e)}
                />
                <div className={"whitespace-nowrap text-secondary"}>
                  Balance: {usdtBalance}
                </div>
              </div>
            </div>
            <div
              className={
                "flex flex-row justify-between w-full px-3 py-1 text-xs"
              }
            >
              <div>Fees</div>
              <div className={"whitespace-nowrap"}>1 USDT</div>
            </div>
            <div
              className={
                "flex flex-row justify-center items-center w-full text-xs my-5 py-2 border-y border-accent"
              }
            >
              <div>1 RAF = {rafPrice}</div>
            </div>
            <button className={"btn btn-primary w-full "} onClick={buy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyModal;
