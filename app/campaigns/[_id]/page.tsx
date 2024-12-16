"use client";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context";
import { calculatePercentage, daysLeft } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import CountBox from "../../components/CountBox";
import avatar from "../../../public/images/avatar.png";
import ProjectDescription from "../../components/ProjectDescription";
import CompanyDescription from "../../components/CompanyDescription";
import usdtLogo from "../../../public/images/tether-usdt-logo.png";
import Loader from "../../components/Loader";
import AlertModal from "../../components/AlertModal";
import { toast } from "react-toastify";

const CampaignDetails = ({ params }: { params: { _id: string } }) => {
  const { getCampaign, getDonors, invest, account } = useStateContext();
  const [campaign, setCampaign] = useState<Campaign>();
  const [donors, setDonors] = useState<string[]>([]);
  const [remainingDays, setRemainingDays] = useState<string>("");
  const [investedAmount, setInvestedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const campaign: Campaign = await getCampaign(params._id);
        const donors = await getDonors(campaign.id);
        setCampaign(campaign);
        setRemainingDays(
          daysLeft(new Date(campaign.deadline).getTime()) as string,
        );
        console.log(donors);
        setDonors(donors[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCampaign();
  }, []);

  const handleConfirm = async () => {
    setIsAlertOpen(false);
    setIsLoading(true);
    if (account) {
      try {
        if (campaign) {
          const _campaign = campaign;
          _campaign.raised += investedAmount;
          await invest(campaign.id, investedAmount, _campaign);
          setIsLoading(false);
          toast.success("You have successfully invested in this project", {
            position: "top-center",
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please connect your account", {
        position: "top-center",
        theme: "dark",
      });
    }
  };
  const handleCancel = () => {
    console.log("Cancelled!");
    setIsAlertOpen(false);
  };

  //@ts-ignore
  const handleInvestment = (e) => {
    setInvestedAmount(e.target.value);
  };
  return (
    <>
      {campaign ? (
        <div className="w-full max-w-screen-md lg:max-w-screen-lg  pt-5 mx-auto sm:py-5">
          {isLoading && <Loader />}
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
                <video
                  controls
                  src={campaign.company.foundersVideo}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={"relative w-full h-1 bg-secondary"}>
                <div
                  className={"absolute h-full bg-primary "}
                  style={{
                    width: `${calculatePercentage(campaign.target, campaign.raised)}%`,
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
                title={`Raised of ${campaign.target}`}
                value={campaign.raised.toString()}
              />
              <CountBox
                title={"Total Investors"}
                value={donors.length.toString()}
              />
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
                  {campaign.creator}
                </span>
              </div>
            </div>
          </div>
          <div className={"mt-24 flex flex-col gap-5  "}>
            <h4 className={"font-semibold text-lg text-white uppercase w-24"}>
              COMPANY
            </h4>

            <div
              className={
                "w-full rounded flex flex-wrap bg-secondary max-w-max p-4 gap-8"
              }
            >
              <CompanyDescription
                subtitle={"Name"}
                description={campaign.company.name}
              />
              <CompanyDescription
                subtitle={"Type"}
                description={campaign.company.type}
              />

              {campaign.company.creationDate && (
                <CompanyDescription
                  subtitle={"Date of establishment"}
                  description={campaign.company.creationDate.toString()}
                />
              )}
              <CompanyDescription
                subtitle={"Country"}
                description={campaign.company.country}
              />
              {campaign.company.acceleratorOrIncubator && (
                <CompanyDescription
                  subtitle={"Accelerator/Incubator"}
                  description={campaign.company.acceleratorOrIncubator}
                />
              )}
              <CompanyDescription
                subtitle={"Sector"}
                description={campaign.company.sector}
              />
              <CompanyDescription
                subtitle={"Industry"}
                description={campaign.company.industry}
              />
              <CompanyDescription
                subtitle={"Description"}
                description={campaign.company.description}
              />
            </div>
            <ul className={" mt-2 mb-12 flex flex-row gap-2"}>
              {campaign.company.founders.map(
                (stakeholder: Founder, i: number) => (
                  <li key={i}>
                    <a
                      target={"_blank"}
                      className={"text-primary"}
                      href={stakeholder.linkedIn}
                    >
                      {`${stakeholder.firstName} 
                          ${stakeholder.lastName} 
                          (${stakeholder.role})`}
                    </a>
                  </li>
                ),
              )}
            </ul>
            <div className={"flex flex-wrap gap-8"}>
              <div>
                <h4
                  className={"font-semibold text-lg text-white capitalize mb-4"}
                >
                  Business Plan
                </h4>
                <iframe
                  style={{ width: "100%", aspectRatio: "4/3" }}
                  src={campaign.company.businessPlan}
                  width="800"
                  height="500"
                ></iframe>
              </div>
              {campaign.company.financialStatements && (
                <div>
                  <h4
                    className={
                      "font-semibold text-lg text-white capitalize mb-4"
                    }
                  >
                    Financial Statement
                  </h4>
                  <iframe
                    style={{ width: "100%", aspectRatio: "4/3" }}
                    src={campaign.company.financialStatements}
                    width="800"
                    height="500"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          <div className={"mt-24 flex sm:flex-row flex-col gap-5"}>
            <div className={"flex-[2] flex flex-col gap-5"}>
              <h4 className={"font-semibold text-lg text-white mb-2"}>
                PRODUCT (
                <span className={"text-primary"}>
                  {campaign.company.project.activeUsers + " "}
                </span>
                active users)
              </h4>
              <div className={"flex flex-col gap-5"}>
                <div
                  className={
                    "w-full h-[400px] object-cover rounded overflow-hidden"
                  }
                >
                  <video
                    controls
                    src={campaign.company.project.demo}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div
                  className={"mt-8 flex sm:flex-row flex-col gap-y-5 gap-x-16"}
                >
                  <ProjectDescription
                    subtitle={"Description"}
                    description={campaign.company.project.description}
                  />
                  <ProjectDescription
                    subtitle={"Innovation"}
                    description={campaign.company.project.innovation}
                  />
                </div>
                <div className={"flex sm:flex-row flex-col gap-y-5 gap-x-16"}>
                  <ProjectDescription
                    subtitle={"Competitors"}
                    description={campaign.company.project.competitors}
                  />
                  <ProjectDescription
                    subtitle={"Need"}
                    description={campaign.company.project.intendedUseOfFunds}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={"mt-12 flex flex-col sm:flex-row gap-y-5 gap-x-80"}>
            <div>
              <h4 className={"font-semibold text-lg text-white uppercase"}>
                Invest
              </h4>
              <div className={"flex flex-col w-full items-center gap-2"}>
                <h2 className={"text-lg w-full text-primary font-medium"}>
                  Important Notice
                </h2>
                <p className={"text-sm text-white"}>
                  Investing in startups and SMEs carries high risks. Raise
                  Africa does not guarantee returns or investment success.
                  Invest only what you can afford to lose and conduct thorough
                  due diligence before investing.
                </p>
              </div>
              <div
                className={
                  "bg-[#222221] flex flex-col gap-5 p-8 w-80 mt-5  rounded"
                }
              >
                <h5 className={"text-white text-center"}>
                  You believe in{" "}
                  <span className={"text-primary capitalize"}>
                    {campaign.company.name}
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
                      src={usdtLogo}
                      width={0}
                      height={0}
                      style={{ width: "100%", height: "100%" }}
                      alt="USDT Logo"
                    />
                  </div>
                </div>
                <p>
                  With{" "}
                  <span
                    className={"text-primary text-center"}
                  >{`${investedAmount} USDT`}</span>{" "}
                  you will own {investedAmount / campaign.company.nft.price} of{" "}
                  {campaign.company.name} {campaign.company.nft.type}
                </p>
                <button
                  onClick={() => setIsAlertOpen(true)}
                  className={"btn btn-primary"}
                >
                  Invest
                </button>
              </div>
            </div>
          </div>
          <AlertModal
            isOpen={isAlertOpen}
            message="You will not be able to edit the submitted campaign. Are you sure you want to proceed?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CampaignDetails;
