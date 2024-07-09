"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { calculatePercentage, daysLeft } from "../../utils";
import CountBox from "../../components/CountBox";
import React, { useEffect, useState } from "react";
import FormField from "../../components/FormField";
import { useStateContext } from "../../context";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const PropositionDetails = () => {
  const router = useRouter();
  const { getRafTVL, account, rafBalance, voteProposition } = useStateContext();
  const [currentProposition, setCurrentProposition] = useState(
    {} as Proposition,
  );
  const [rafTVL, setRafTVL] = useState(0);
  useEffect(() => {
    const proposition = localStorage.getItem("selectedProposition");
    if (proposition) {
      setCurrentProposition(JSON.parse(proposition));
    }
    (async () => {
      try {
        const tvl = await getRafTVL();
        setRafTVL(tvl);
        console.log(tvl);
      } catch (err) {
        console.log("Error occured when fetching raf TVL");
      }
    })();
  }, []);

  const goToDiscussion = () => {
    localStorage.setItem(
      "propositionReferenceId",
      JSON.stringify(currentProposition.id),
    );
    router.push("/forum/new-post");
  };

  const vote = (e) => {
    e.preventDefault();
    const actualVoter = currentProposition.voters.filter(
      (voter) => voter.wallet_address == account.address,
    );
    let error = "";
    if (actualVoter.length > 0) {
      error = "You cannot vote twice";
      toast.error(error, {
        position: "top-center",
        theme: "dark",
      });
    } else if (account.address == currentProposition.creator) {
      error = "You cannot vote your own Proposition";
      toast.error(error, {
        position: "top-center",
        theme: "dark",
      });
    } else {
      const voter: Voter = {
        date_of_vote: new Date(),
        raf_TVL: rafTVL,
        vote_worth: (rafBalance / rafTVL) * 100,
        wallet_address: account.address,
      };
      voteProposition(currentProposition, voter);
    }
  };
  const remainingDays = daysLeft(currentProposition.deadline) as string;
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
            <div className={"flex flex-row gap-3"}>
              <button
                className={"btn btn-sm w-fit sm:btn-md btn-outline btn-primary"}
                onClick={goToDiscussion}
              >
                Discuss
              </button>
              <Link
                className={"btn btn-sm w-fit sm:btn-md btn-primary"}
                href={"/propositions/create-proposition"}
              >
                Create Proposition
              </Link>
            </div>
          </div>
          <div className="w-full  max-w-screen-md xl:max-w-screen-lg  pt-5 mx-auto sm:py-5 ">
            <div
              className={
                "rounded w-full bg-secondary flex justify-center items-center flex-col sm:p-10 p-4"
              }
            >
              <div
                className={
                  "flex justify-center items-center p-4 rounded sm:min-w-[380px] w-full"
                }
              >
                <div className={"flex flex-col gap-10  w-full"}>
                  <h1
                    className={
                      "sm:text-xl text-primary text-center font-medium"
                    }
                  >
                    {currentProposition.title}
                  </h1>
                  <p>{currentProposition.description}</p>
                  <div
                    className={
                      "flex w-full items-center max-[550px]:flex-wrap flex-row justify-between gap-10"
                    }
                  >
                    <CountBox title={"Days Left"} value={remainingDays} />
                    <div
                      className={
                        "flex w-3/6 flex-col gap-2 items-center justify-center"
                      }
                    >
                      <progress
                        className="progress progress-primary w-full my-1 rounded"
                        value={currentProposition.percentage}
                        max="100"
                      ></progress>
                      <div className={"w-fit items-center"}>
                        <span
                          className={"text-primary w-10 text-2xl font-semibold"}
                        >
                          {currentProposition.percentage?.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <CountBox
                      title={`Total Votes`}
                      value={(
                        currentProposition.voters?.length || 0
                      ).toString()}
                    />
                  </div>

                  {currentProposition.status?.toLowerCase() == "active" ? (
                    <button className={"btn btn-primary"} onClick={vote}>
                      vote
                    </button>
                  ) : (
                    <button disabled className={"btn btn-primary btn-disabled"}>
                      vote
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropositionDetails;
