type Campaign = {
  id: number;
  image: string;
  creator: string;
  startup: Startup;
  raised: number;
  target: number;
  deadline: number;
};
type Startup = {
  project: Project;
  financialStatus: string;
  stakeholders: Stakeholder[];
  sharesToFundPercentage: number;
  location: string;
  socialNetwork: SocialNetwork[];
};
type Project = {
  title: string;
  description: string;
  category: string;
  need: string; //need description
  innovation: string;
  demo: string; // demo of the project
};

type Stakeholder = {
  firstName: string;
  lastName: string;
  role: string;
  linkedIn: string;
};

type SocialNetwork = {
  name: string;
  link: string;
};

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
