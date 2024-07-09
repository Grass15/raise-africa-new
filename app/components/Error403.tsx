"use client";
import forbidden403Image from "../../public/images/403ErrorForbidenImage.png";
import Image from "next/image";
import { useStateContext } from "../context";
import { ButtonConnect } from "./ButtonConnect";

const Error403 = () => {
  const { isConnected } = useStateContext();
  return (
    <div
      className={
        "flex relative size-full justify-center m-auto items-center align-middle"
      }
    >
      <div className={"w-5/12 h-auto z-0"}>
        <Image
          src={forbidden403Image}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="Raise Africa Logo"
        />
      </div>
      <div
        role="alert"
        className="alert alert-warning absolute inset-y-0 bg-primary w-10/12 h-fit z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>

        <span>
          Access Denied:{" "}
          {isConnected ? (
            <span>
              Please <span className={"font-bold underline"}>buy</span> some RAF
              in order to access the content.
            </span>
          ) : (
            <span>
              Please <ButtonConnect simple={true} /> your wallet in order to
              access the content of this page.
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Error403;
