import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { useStateContext } from "../context";
import ButtonDisconnect from "./ButtonDisconnect";
import Link from "next/link";

const ProfileModal = () => {
  const { account, rafBalance, isConnected } = useStateContext();

  return (
    <>
      <label htmlFor="my_modal_5">
        <div className="avatar cursor-pointer items-center align-middle">
          <div className="w-10 rounded-full  mr-3">
            <Image
              className={"hidden sm:flex"}
              src={avatar}
              alt="Profile image"
            />
          </div>
        </div>
      </label>
      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box rounded-xl border border-primary px-3 w-auto items-center min-w-52 max-w-76">
          <label
            htmlFor="my_modal_5"
            className={
              "right-3 top-2 absolute text-xl p-2 font-bold cursor-pointer"
            }
          >
            x
          </label>
          <div className={"w-full flex flex-row gap-2 items-center mt-5 "}>
            <div className=" flex avatar items-center place-self-center m-auto ">
              <div className="w-16 rounded-full">
                <Image src={avatar} alt="Profile image" />
              </div>
            </div>
            <div className={"flex flex-col gap-2 w-52 overflow-hidden"}>
              <h4 className={"text-ellipsis overflow-hidden text-xs"}>
                {isConnected ? account.address : "Please Reconnect"}
              </h4>
              <p className={"text-primary font-bold"}>
                {isConnected ? rafBalance + " RAF" : "Please Reconnect"}
              </p>
            </div>
          </div>

          <div className="modal-action justify-between border-t border-primary">
            <div className={"mt-5 flex flex-row w-full justify-between px-3"}>
              <label htmlFor="my_modal_5">
                <ButtonDisconnect />
              </label>

              <Link className={`btn btn-sm btn-primary `} href={"/profile"}>
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileModal;
