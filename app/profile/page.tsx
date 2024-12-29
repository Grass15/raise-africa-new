"use client";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { useStateContext } from "../context";
import CampaignCard from "../components/CampaignCard";
import PropositionCard from "../components/PropositionCard";
import { useEffect, useState } from "react";
import usdtLogo from "../../public/images/tether-usdt-logo.png";
import Logo from "../../public/images/logo.png";
import CopyButton from "../components/CopyButton";
import Link from "next/link";

const ProfilePage = () => {
  const { account, getUserCampaigns, getAffiliateByAddress } =
    useStateContext();

  const [propositions, setPropositions] = useState<Proposition[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [affiliationId, setAffiliationId] = useState<string>();
  const [referred, setReferred] = useState<Referred[]>([]);
  const [referredStats, setReferredStats] = useState<[string, number[]][]>([]);
  const [amountMade, setAmountMade] = useState<number>(0);
  const [totalReferred, setTotalReferred] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const affiliate = await getAffiliateByAddress();
        console.log(affiliate);
        setAffiliationId(affiliate["affiliation-id"]);
        getStats(affiliate["earnings"]);
      } catch (err) {
        console.log(err);
        setAffiliationId("");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const campaigns = await getUserCampaigns(account.address);
        console.log("Fetched campaigns:", campaigns);
        setCampaigns(Array.isArray(campaigns) ? campaigns : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function getMonday(d: Date) {
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  function getWeeklyAmount(address: string, refs: Referred[]): number {
    let weeklyAmount = 0;
    const monday = getMonday(new Date());
    const sunday = new Date(monday).setDate(monday.getDate() + 7);
    const today = new Date();
    refs
      .filter(
        (r) =>
          r.address == address &&
          r.date.getFullYear() == today.getFullYear() &&
          r.date.getMonth() == today.getMonth() &&
          monday < r.date &&
          r.date < today,
      )
      .map((r) => (weeklyAmount += r.amount));
    return weeklyAmount;
  }
  function getMonthlyAmount(address: string, refs: Referred[]): number {
    let monthlyAmount = 0;
    const today = new Date();
    refs
      .filter(
        (r) =>
          r.address == address &&
          r.date.getFullYear() == today.getFullYear() &&
          r.date.getMonth() == today.getMonth(),
      )
      .map((r) => (monthlyAmount += r.amount));
    return monthlyAmount;
  }

  function getYearlyAmount(address: string, refs: Referred[]): number {
    let yearlyAmount = 0;
    const today = new Date();
    refs
      .filter(
        (r) =>
          r.address == address && r.date.getFullYear() == today.getFullYear(),
      )
      .map((r) => (yearlyAmount += r.amount));
    return yearlyAmount;
  }

  function getStats(refs: Referred[]) {
    try {
      refs.map((r) => (r.date = new Date(r.date)));
      refs = refs.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      });
      let amountMade = 0;
      let refStat: [string, number[]][] = []; // Initialize refStat
      let refsCopy = [...refs];
      while (refsCopy.length > 0) {
        const ref = refsCopy[0];
        const weeklyAmount = getWeeklyAmount(ref.address, refsCopy);
        const monthlyAmount = getMonthlyAmount(ref.address, refsCopy);
        const yearlyAmount = getYearlyAmount(ref.address, refsCopy);
        const record: [string, number[]] = [
          ref.address,
          [weeklyAmount, monthlyAmount, yearlyAmount],
        ];
        refStat.push(record);
        refsCopy = refsCopy.filter((r) => r.address != ref.address);
      }
      refs.map((r) => (amountMade += r.amount));
      setAmountMade(amountMade);
      setTotalReferred(refStat.length);
      setReferred(refs);
      setReferredStats(refStat);
    } catch (err) {
      console.log(err);
    }
  }

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
            <div className={"flex flex-col gap-2"}>
              <h4
                className={"text-ellipsis overflow-hidden text-sm text-primary"}
              >
                {account ? account.address : ""}
              </h4>
              {affiliationId && (
                <h4 className={"text-sm"}>
                  Your affiliation link :{" "}
                  <div className={"indicator"}>
                    <span
                      className={"text-primary"}
                    >{`https://raiseafrica.finance?ref=${affiliationId}`}</span>
                    <CopyButton
                      text={`https://raiseafrica.finance?ref=${affiliationId}`}
                    />
                  </div>
                </h4>
              )}
            </div>
          </div>
          <form className={"w-full flex flex-col mt-8 gap-10"}>
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="dashboardTabs"
                role="tab"
                className="tab"
                aria-label="Affiliations "
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                {affiliationId ? (
                  <>
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-figure text-orange-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            ></path>
                          </svg>
                        </div>
                        <div className="stat-title">Users Referred</div>
                        <div className="stat-value text-primary">
                          {totalReferred}
                        </div>
                        <div className="stat-desc"></div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <div className={"w-[32px] h-[32px]"}>
                            <Image
                              src={usdtLogo}
                              width={0}
                              height={0}
                              style={{ width: "100%", height: "100%" }}
                              alt="Tether USDT Logo"
                            />
                          </div>
                        </div>
                        <div className="stat-title">Amount Made</div>
                        <div className="stat-value text-primary">
                          {amountMade}
                        </div>
                        <div className="stat-desc">{`From ${
                          referred[0]?.date?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }) || ""
                        } to Today`}</div>
                      </div>
                    </div>
                    <div className="overflow-x-auto mt-4">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr>
                            <th></th>
                            <th>Address</th>
                            <th>This Week</th>
                            <th>This Month</th>
                            <th>This Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          {referredStats.map((ref, index) => (
                            <tr key={index}>
                              <th>{index + 1}</th>
                              <td className={"text-ellipsis overflow-hidden"}>
                                {ref[0]}
                              </td>
                              <td>{ref[1][0]}</td>
                              <td>{ref[1][1]}</td>
                              <td>{ref[1][2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <Link
                    className={`text-primary hover:underlines`}
                    href={"/affiliation"}
                  >
                    Create an affiliation link
                  </Link>
                )}
              </div>
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
