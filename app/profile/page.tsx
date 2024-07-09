"use client";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { useStateContext } from "../context";
import CampaignCard from "../components/CampaignCard";
import PropositionCard from "../components/PropositionCard";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { isConnected, account, getUserPropositions } = useStateContext();
  const { getCampaigns } = useStateContext();
  const campaigns: Campaign[] = getCampaigns();

  const [propositions, setPropositions] = useState<Proposition[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const propositions = await getUserPropositions();
        setPropositions(propositions);
        console.log(propositions);
      } catch (err) {
        console.log("Error occured when fetching Propostions");
      }
    })();
  }, []);

  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg  pt-5 mx-auto sm:py-5 ">
        <div
          className={
            "rounded bg-[#222221] flex justify-center items-center flex-col sm:p-10 p-4"
          }
        >
          <div className={"w-full flex flex-row gap-4 items-center"}>
            <div className=" flex avatar items-center ">
              <div className="w-16 rounded-full">
                <Image src={avatar} alt="Profile image" />
              </div>
            </div>
            <div className={"flex flex-col gap-2 overflow-hidden"}>
              <h4
                className={"text-ellipsis overflow-hidden text-sm text-primary"}
              >
                {account ? account.address : ""}
              </h4>
            </div>
          </div>
          <form className={"w-full flex flex-col mt-16 gap-10"}>
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="dashboardTabs"
                role="tab"
                className="tab "
                aria-label="Campaigns"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div
                  className={
                    "flex flex-col sm:gap-8 sm:flex-wrap md:grid md:grid-cols-2  lg:grid-cols-3 mt-8 gap-14"
                  }
                >
                  {campaigns.map((campaign, index) => (
                    <CampaignCard key={index} campaign={campaign} />
                  ))}
                </div>
              </div>

              <input
                type="radio"
                name="dashboardTabs"
                role="tab"
                className="tab "
                aria-label="Propositions "
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className={"gap-14 mx-auto mt-8 sm:grid sm:grid-cols-2 "}>
                  {propositions?.map((proposition, index) => (
                    <PropositionCard key={index} proposition={proposition} />
                  ))}
                </div>
              </div>

              <input
                type="radio"
                name="dashboardTabs"
                role="tab"
                className="tab"
                aria-label="Votes "
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                You have not yet made any vote
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
