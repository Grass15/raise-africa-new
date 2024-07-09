"use client";
import PropositionCard from "./PropositionCard";
import { useStateContext } from "../context";
import CampaignCard from "./CampaignCard";
import { useEffect, useState } from "react";

const PropositionsList = () => {
  const { getPropositions, propositionsFilteredCategories } = useStateContext();
  const [propositions, setPropositions] = useState<Proposition[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const propositions = await getPropositions();
        setPropositions(propositions);
        console.log(propositions);
      } catch (err) {
        console.log("Error occured when fetching Propostions");
      }
    })();
  }, [propositionsFilteredCategories]);

  return (
    <div
      className={
        "gap-x-5 gap-y-14 max-[935px]:flex-col max-[935px]:items-center  mx-auto mt-8 flex flex-wrap lg:grid lg:grid-cols-2  xl:grid-cols-3 "
      }
    >
      {propositions?.map((proposition, index) => (
        <PropositionCard key={index} proposition={proposition} />
      ))}
    </div>
  );
};

export default PropositionsList;
