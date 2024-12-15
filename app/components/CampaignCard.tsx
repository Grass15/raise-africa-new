import Image from "next/image";
import { startupCategoryIcon } from "../constants";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { daysLeft } from "../utils";
import avatar from "../../public/images/avatar.png";
import {
  faEllipsisV,
  faLayerGroup,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useStateContext } from "../context";

// @ts-ignore
const CampaignCard = ({ campaign }) => {
  const { account } = useStateContext();
  const actualCampaign = campaign as Campaign;
  const [showModal, setShowModal] = useState(false);
  const [openingUrl, setOpeningUrl] = useState("/campaigns/" + campaign._id);
  //@ts-ignore
  const remainingDays = daysLeft(new Date(actualCampaign.deadline).getTime());

  useEffect(() => {
    if (
      account &&
      account.address == campaign.creator &&
      campaign.state == ("Incomplete" as CampaignStatus)
    ) {
      setOpeningUrl("/campaigns/create-campaign");
    }
  }, []);

  return (
    <div className={" w-full cursor-pointer rounded bg-[#222221]"}>
      <div className={"flex flex-col p-4 gap-2"}>
        <div className={"flex flex-row justify-between text-primary"}>
          <Link href={openingUrl}>
            <div className={"flex flex-row gap-2 text-primary"}>
              <FontAwesomeIcon icon={faLayerGroup} />
              <h4 className={"capitalize text-sm"}>
                {campaign.company.industry}
              </h4>
            </div>
          </Link>
          {campaign.state != ("Incomplete" as CampaignStatus) && (
            <div
              className="tooltip tooltip-primary"
              data-tip="Share"
              onClick={() => setShowModal(true)}
            >
              <FontAwesomeIcon icon={faShareFromSquare} />
            </div>
          )}
        </div>
        <Link href={openingUrl}>
          <div className="flex flex-col gap-1">
            <h3 className={"font-medium text-white capitalize"}>
              {campaign.company.name}
            </h3>
            <p
              className={
                "text-secondary text-xs text-ellipsis overflow-hidden whitespace-nowrap"
              }
            >
              {actualCampaign.company.project.description}
            </p>
          </div>
        </Link>
        <Link href={openingUrl}>
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
        </Link>
        <Link href={openingUrl}>
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
        </Link>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="card bg-secondary w-96 rounded shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-end">
                <button
                  className="btn btn-square btn-sm"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p>
                Use the following link to share this campaign:{" "}
                <span className={"break-words cursor-text text-primary"}>
                  {"https://raiseafrica.finance/campaigns/" + campaign._id}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignCard;
