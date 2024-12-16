"use client";
import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { useStateContext } from "../context";

const CampaignsList = () => {
  const { getActiveCampaigns } = useStateContext();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns: Campaign[] = await getActiveCampaigns();
        console.log("Fetched campaigns:", campaigns);
        setCampaigns(Array.isArray(campaigns) ? campaigns : []);
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
      {Array.isArray(campaigns) &&
        campaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))}
    </div>
  );
};

export default CampaignsList;
