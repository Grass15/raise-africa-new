import Image from "next/image";
import startupIcon from "../../public/images/home/startup.png";
// @ts-ignore
const CardNoButton = ({ icon, title, description }) => {
  return (
    <div
      className={
        "max-[350px]:w-[200px] max-[350px]:gap-4 max-[350px]:py-4 bg-[#222221] items-center w-60 py-6 px-3 flex flex-col gap-2 rounded border-primary border-[3px] shadow shadow-cyan-500"
      }
    >
      <div className={"w-14 h-14"}>
        <Image
          src={icon}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="Card Icon"
        />
      </div>
      <h4 className={"text-xl tracking-wide font-medium text-center"}>
        {title}
      </h4>
      <p className="text-xs max-w-screen-lg text-secondary px-3 text-center leading-6">
        {description}
      </p>
    </div>
  );
};

export default CardNoButton;
