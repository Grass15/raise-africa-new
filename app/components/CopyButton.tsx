import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const CopyButton = ({ text = "" }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.dark("copied!", {
        autoClose: 500,
        className: "p-0 w-[100px]",
        hideProgressBar: true,
      });
    } catch (error) {}
  };
  return (
    <div
      className={
        "indicator-item cursor-pointer text-primary tooltip tooltip-primary"
      }
      data-tip="Copy"
      onClick={copyToClipboard}
    >
      <FontAwesomeIcon icon={faCopy} />
    </div>
  );
};

export default CopyButton;
