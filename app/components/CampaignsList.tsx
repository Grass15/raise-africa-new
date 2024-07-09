"use client";
import { useState } from "react";
import CampaignCard from "./CampaignCard";
import { useStateContext } from "../context";
const CampaignsList = () => {
  const { getCampaigns } = useStateContext();
  const campaigns: Campaign[] = getCampaigns();

  return (
    <div
      className={
        "flex flex-col sm:gap-8 sm:flex-wrap md:grid md:grid-cols-2  lg:grid-cols-3 mt-8 gap-14"
      }
    >
      {campaigns.map((campaign, index) => (
        <CampaignCard key={index} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignsList;
