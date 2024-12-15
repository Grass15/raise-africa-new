import { keccak256 } from "js-sha3";
import { undefined } from "zod";
import projectDescription from "../components/ProjectDescription";

export const daysLeft = (deadline: number) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return Number(remainingDays.toFixed(0)) > 0 ? remainingDays.toFixed(0) : "0";
};

export const calculatePercentage = (amount: number, goal: number) => {
  return (goal / amount) * 100;
};

export { encryptObject } from "./crypto";
export { decryptObject } from "./crypto";

export const structCampaign = (
  campaignForm: CampaignInputs,
  founders: Founder[],
  socialNetworks: SocialNetwork[],
  status: CampaignStatus,
) => {
  const project: Project = {
    description: campaignForm.projectDescription,
    intendedUseOfFunds: campaignForm.projectNeed,
    activeUsers: campaignForm.activeUsers,
    innovation: campaignForm.projectInnovation,
    competitors: campaignForm.competitors,
    demo: campaignForm.demo,
  };
  const company: Company = {
    founders,
    project,
    type: campaignForm.companyType,
    acceleratorOrIncubator: campaignForm.acceleratorOrIncubator,
    name: campaignForm.companyName,
    financialStatements: campaignForm.financialStatements,
    country: campaignForm.country,
    description: campaignForm.companyBriefDescription,
    socialNetworks: socialNetworks,
    creationDate: campaignForm.companyCreationDate,
    industry: campaignForm.industry,
    sector: campaignForm.sector,
    foundersVideo: campaignForm.foundersVideo,
    businessPlan: campaignForm.businessPlan,
    nft: {
      name: campaignForm.NFTInitials,
      price: campaignForm.nftUnitPrice,
      availableQuantity:
        campaignForm.targetedAmount / campaignForm.nftUnitPrice,
      interest: campaignForm.bondInterest,
      duration: campaignForm.bondDuration,
      type: campaignForm.nftType,
    },
  };
  const campaign: Campaign = {
    _id: campaignForm._id,
    creationDate: new Date(),
    company,
    raised: 0,
    target: campaignForm.targetedAmount,
    deadline: campaignForm.campaignDeadline,
    signature: campaignForm.signature,
    state: status,
  };
  return campaign;
};

export const destructCampaign = (campaign: Campaign) => {
  const {
    company: {
      founders,
      project: {
        description: projectDescription,
        intendedUseOfFunds: projectNeed,
        activeUsers,
        innovation: projectInnovation,
        competitors,
        demo,
      },
      country,
      name: companyName,
      type: companyType,
      acceleratorOrIncubator: acceleratorOrIncubator,
      description: companyBriefDescription,
      socialNetworks,
      creationDate: companyCreationDate,
      industry,
      sector,
      foundersVideo,
      businessPlan,
      nft: {
        name: NFTInitials,
        type: nftType,
        price: nftUnitPrice,
        interest: bondInterest,
        duration: bondDuration,
      },
    },
    _id,
    target: targetedAmount,
    deadline: campaignDeadline,

    creationDate,
    signature,
  } = campaign;

  const campaignForm: CampaignInputs = {
    _id,
    companyName,
    companyType,
    acceleratorOrIncubator,
    founders,
    nftType,
    signature,
    creationDate,
    projectDescription,
    projectNeed,
    activeUsers,
    projectInnovation,
    competitors,
    demo,
    foundersVideo,
    businessPlan,
    country,
    companyBriefDescription,
    companyCreationDate,
    industry,
    sector,
    targetedAmount,
    campaignDeadline,
    nftUnitPrice,
    NFTInitials,
    bondInterest,
    bondDuration,
  };

  return {
    campaignForm,
    socialNetworks,
  };
};
