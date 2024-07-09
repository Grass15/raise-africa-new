import Image from "next/image";
import { startupCategoryIcon } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { daysLeft } from "../utils";
import avatar from "../../public/images/avatar.png";
import { useRouter } from "next/navigation";
import { useStateContext } from "../context";

// @ts-ignore
const CampaignCard = ({ campaign }) => {
  const router = useRouter();
  const actualCampaign = campaign as Campaign;
  const category = actualCampaign.startup.project.category.toLowerCase();
  const categoryIcon = startupCategoryIcon[category];
  const remainingDays = daysLeft(actualCampaign.deadline);
  const navigateToCampaignDetails = () => {
    localStorage.setItem("selectedCampaign", JSON.stringify(actualCampaign));
    router.push("/campaigns/campaign-details");
  };
  return (
    <div
      className={" w-full cursor-pointer rounded bg-[#222221]"}
      onClick={navigateToCampaignDetails}
    >
      <div className={"w-full h-32 object-cover rounded overflow-hidden"}>
        <Image
          src={actualCampaign.image}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt="Campaign Image"
        />
      </div>
      <div className={"flex flex-col p-4 gap-2"}>
        <div className={"flex flex-row gap-2 text-primary align-middle"}>
          <FontAwesomeIcon icon={categoryIcon} />
          <h4 className={"capitalize text-sm"}>
            {actualCampaign.startup.project.category}
          </h4>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className={"font-medium text-white capitalize"}>
            {actualCampaign.startup.project.title}
          </h3>
          <p
            className={
              "text-secondary text-xs text-ellipsis overflow-hidden whitespace-nowrap"
            }
          >
            {actualCampaign.startup.project.description}
          </p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <div>
            <span className={"block text-primary text-sm"}>
              {actualCampaign.raised}
            </span>
            <span className={"block text-sm"}>
              {"Raised of " + actualCampaign.target}
            </span>
          </div>
          <div>
            <span className={"block text-primary text-sm"}>
              {remainingDays}
            </span>
            <span className={"block text-sm"}>{"Days Left"}</span>
          </div>
        </div>
        <div className={"flex flex-row mt-2 gap-3 align-middle"}>
          <div className="avatar cursor-pointer items-center align-middle">
            <div className="w-10 rounded-full mr-3">
              <Image src={avatar} alt="Profile image" />
            </div>
          </div>
          <span
            className={
              "text-sm text-primary text-ellipsis overflow-hidden whitespace-nowrap m-auto"
            }
          >
            {"by " + actualCampaign.creator}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
