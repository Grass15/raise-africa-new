import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../context";

const ButtonDisconnect = () => {
  const { wallet, disconnect } = useStateContext();
  return (
    <div className={"flex flex-row items-center justify-center"}>
      <div
        className="btn btn-sm btn-primary btn-outline text-xs"
        onClick={() => {
          disconnect(wallet);
        }}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span>Disconnect</span>
      </div>
    </div>
  );
};
export default ButtonDisconnect;
