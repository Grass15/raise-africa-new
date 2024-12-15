"use client";
import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { useStateContext } from "../context";
import Link from "next/link";
import { destructCampaign } from "../utils";
const CampaignsList = () => {
  const { getActiveCampaigns } = useStateContext();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns: Campaign[] = await getActiveCampaigns();
        setCampaigns(campaigns);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCampaigns();
  }, [getActiveCampaigns]);

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
