"use client";
import { useStateContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { forumTabItems } from "../../constants";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { calculatePercentage, daysLeft } from "../../utils";
import CountBox from "../../components/CountBox";
import avatar from "../../../public/images/avatar.png";
import ProjectDescription from "../../components/ProjectDescription";
import logo from "../../../public/images/logo.png";

const CampaignDetailsPage = () => {
  const { currentCampaign, donors } = useStateContext();
  const remainingDays = daysLeft(currentCampaign.deadline) as string;
  const [investedAmount, setInvestedAmount] = useState(0);

  const handleInvestment = (e) => {
    setInvestedAmount(e.target.value);
  };
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-w-screen-md lg:max-w-screen-lg  pt-5 mx-auto sm:py-5">
        <div className={"w-full justify-between flex flex-col gap-5"}>
          <div className="w-full flex flex-row max-[500px]:flex-col justify-between gap-5 align-middle">
            <div className="flex flex-row text-[#9EA1B4] align-middle">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                className="bg-[#222221] rounded-full w-72 h-10 outline-none px-5 pr-10 text-sm focus:ring-blue-500 focus:outline-none "
              />
              <button
                type="submit"
                className="-ml-14 mt-2 bg-[#222221] h-fit z-20"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <Link
              className={"btn btn-sm w-fit sm:btn-md btn-primary"}
              href={"/campaigns/create-campaign"}
            >
              Create Campaign
            </Link>
          </div>
        </div>
        <div className={"w-full flex md:flex-row flex-col mt-10 gap-10"}>
          <div className={"flex-1 flex-col "}>
            <div
              className={
                "w-full h-[400px] object-cover rounded overflow-hidden"
              }
            >
              <Image
                src={currentCampaign.image}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
                alt="Campaign Image"
              />
            </div>
            <div className={"relative w-full h-1 bg-secondary"}>
              <div
                className={"absolute h-full bg-primary "}
                style={{
                  width: `${calculatePercentage(currentCampaign.target, currentCampaign.raised)}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>
          <div
            className={"flex md:w-36 w-full flex-wrap justify-between gap-10"}
          >
            <CountBox title={"Days Left"} value={remainingDays} />
            <CountBox
              title={`Raised of ${currentCampaign.target}`}
              value={currentCampaign.raised}
            />
            <CountBox title={"Total Backers"} value={donors.length} />
          </div>
        </div>
        <div className={"mt-12 flex lg:flex-row flex-col gap-5"}>
          <div className={"flex-[2] flex flex-col gap-5"}>
            <h4 className={"font-semibold text-lg text-white uppercase"}>
              creator
            </h4>
            <div className={"flex flex-row gap-3 align-middle items-center"}>
              <div className="avatar cursor-pointer items-center align-middle">
                <div className="w-10 rounded-full mr-3">
                  <Image src={avatar} alt="Profile image" />
                </div>
              </div>
              <span className={"text-sm text-primary "}>
                {currentCampaign.creator}
              </span>
            </div>
          </div>
        </div>
        <div className={"mt-12 flex sm:flex-row flex-col gap-5"}>
          <div className={"flex-[2] flex flex-col gap-5"}>
            <h4 className={"font-semibold text-lg text-white uppercase"}>
              Project
            </h4>
            <div className={"flex flex-col gap-5"}>
              <div className={"flex sm:flex-row flex-col gap-y-5 gap-x-16"}>
                <ProjectDescription
                  subtitle={"Description"}
                  description={currentCampaign.startup.project.description}
                />
                <ProjectDescription
                  subtitle={"Innovation"}
                  description={currentCampaign.startup.project.innovation}
                />
              </div>
              <div className={"flex sm:flex-row flex-col gap-y-5 gap-x-16"}>
                <ProjectDescription
                  subtitle={"Financial Status"}
                  description={currentCampaign.startup.financialStatus}
                />
                <ProjectDescription
                  subtitle={"Need"}
                  description={currentCampaign.startup.project.need}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-12 flex flex-col sm:flex-row gap-y-5 gap-x-80"}>
          <div>
            <h4 className={"font-semibold text-lg text-white uppercase w-24"}>
              Stakeholders
            </h4>
            <ul className={"mt-4 mb-8"}>
              {currentCampaign.startup.stakeholders.map(
                (stakeholder: Stakeholder, i: number) => (
                  <li key={i}>
                    <Link
                      className={"text-primary"}
                      href={stakeholder.linkedIn}
                    >
                      {`${stakeholder.firstName} 
                ${stakeholder.lastName} 
                (${stakeholder.role})`}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className={"font-semibold text-lg text-white uppercase"}>
              Location
            </h4>
            <p className={"text-primary"}>{currentCampaign.startup.location}</p>
          </div>
        </div>
        <div className={"mt-12 flex flex-col sm:flex-row gap-y-5 gap-x-80"}>
          <div>
            <h4 className={"font-semibold text-lg text-white uppercase w-24"}>
              Links
            </h4>
            <ul className={"mt-4 mb-8"}>
              {currentCampaign.startup.stakeholders.map(
                (stakeholder: Stakeholder, i: number) => (
                  <li key={i}>
                    <Link
                      className={"text-primary"}
                      href={stakeholder.linkedIn}
                    >
                      {`${stakeholder.firstName} 
                ${stakeholder.lastName} 
                (${stakeholder.role})`}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className={"font-semibold text-lg text-white uppercase"}>
              Invest
            </h4>
            <div
              className={
                "bg-[#222221] flex flex-col gap-5 p-8 w-80 mt-5  rounded"
              }
            >
              <h5 className={"text-white text-center"}>
                You believe in{" "}
                <span className={"text-primary capitalize"}>
                  {currentCampaign.startup.project.title}
                </span>
              </h5>
              <div className={"flex flex-row gap-5"}>
                <input
                  type="text"
                  placeholder=""
                  className={
                    "input input-bordered input-primary w-[180px]  rounded focus:border-none text-white"
                  }
                  onChange={(e) => handleInvestment(e)}
                />
                <div className={"flex"} style={{ width: 50, height: 50 }}>
                  <Image
                    src={logo}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    alt="Raise Africa Logo"
                  />
                </div>
              </div>
              <p>
                With{" "}
                <span
                  className={"text-primary text-center"}
                >{`${investedAmount} RAF`}</span>{" "}
                you will own{" "}
                {(investedAmount *
                  currentCampaign.startup.sharesToFundPercentage) /
                  currentCampaign.target || 0}
                % of {currentCampaign.startup.project.title} shares
              </p>
              <button className={"btn btn-primary"}>Invest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignDetailsPage;
