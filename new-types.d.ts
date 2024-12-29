declare module "@tawk.to/tawk-messenger-react";
type Campaign = {
  _id?: string; // id in mongo db
  id?: number;
  creator?: string;
  company: Company;
  raised: number;
  target: number;
  deadline: Date;
  NFTAddress?: string;
  creationDate: Date;
  signature: string;
  state: CampaignStatus;
};

type Company = {
  name: string;
  type: CompanyType;
  acceleratorOrIncubator?: string; //Only for startup
  project: Project;
  foundersVideo: string;
  financialStatements?: string;
  businessPlan: string;
  founders: Founder[];
  country: string;
  description: string;
  socialNetworks: SocialNetwork[];
  creationDate: Date;
  industry: string;
  sector: string;
  nft: NFT;
};
type Project = {
  competitors: string;
  description: string; // Does and aim to achieve
  intendedUseOfFunds: string; //need description
  innovation: string; //problem that the project solves and the solution
  activeUsers: number;
  demo: string; // demo of the project
};

type Founder = {
  firstName: string;
  lastName: string;
  role: string;
  linkedIn: string;
};

type SocialNetwork = {
  name: string;
  link: string;
};
enum NFTType {
  Bond = "Bond",
  Equity = "Equity",
}
enum CompanyType {
  STARTUP = "Startup",
  SE = "Small Enterprise",
  ME = "Medium Enterprise",
}

type NFT = {
  address?: string;
  name: string;
  type: NFTType;
  price: number;
  availableQuantity: number;
  interest?: number; // annual interest (Only For bonds)
  duration?: number; // in years (Only For bonds)
};
enum CampaignStatus {
  Incomplete = "Incomplete",
  Active = "Active",
  Complete = "Complete",
  Failed,
  Funded,
  Rejected,
}

type Proposition = {
  id: string;
  creator: string;
  title: string;
  type: string;
  description: string;
  voters: Voter[];
  percentage: number;
  status: string;
  deadline: number;
};
type PropositionType = {
  _id: string;
  name: string;
};

type Voter = {
  date_of_vote: Date;
  raf_TVL: number;
  vote_worth: number;
  wallet_address: string;
};

type EncryptedCampaign = {
  _id: string;
  id: number;
  creator: string;
  company: string; //Hashed data on pinata cloud
  raised: number;
  target: number;
  deadline: number;
  NFTAddress?: string;
  signature: string;
  state: CampaignStatus;
};

type Post = {
  id: string;
  reference_id: string;
  author: string;
  title: string;
  message: string;
  comments: PostComment[];
  creation: number;
  tags: Tag[];
};

type Tag = {
  text: string;
  value: string;
};

type PostComment = {
  postId: string;
  author: string;
  message: string;
  creation: number;
};

type CampaignInputs = {
  _id?: string; //id in mongo db
  companyName: string;
  sector: string;
  industry: string;
  country: string;
  companyCreationDate: Date;
  companyType: CompanyType;
  acceleratorOrIncubator?: string;
  companyBriefDescription: string;
  projectDescription: string;
  projectInnovation: string;
  competitors: string;
  founders: Founder[];
  foundersVideo: string;
  businessPlan: string;
  activeUsers: number;
  demo: string;
  financialStatements?: string;
  targetedAmount: number;
  nftType: NFTType;
  nftUnitPrice: number;
  bondInterest?: number;
  bondDuration?: number;
  projectNeed: string;
  NFTInitials: string;
  signature: string;
  creationDate: Date;
  campaignDeadline: Date;
};

type Referred = {
  address: string;
  amount: number;
  date: Date;
};
