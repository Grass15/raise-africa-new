"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { prepareContractCall, sendTransaction } from "thirdweb";
import { readContract } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { useDisconnect, useActiveWallet } from "thirdweb/react";
import { toEther, toUnits } from "thirdweb/utils";
import axios from "axios";
import { decryptObject } from "../utils";
import * as RAF from "./raf";
import * as CROWDFUNDING from "./crowdfunding";
import * as USDT from "./usdt";

import { client } from "../constants";
import { toast } from "react-toastify";

const StateContext: React.Context<any> = createContext(client);

// @ts-ignore
export const StateContextProvider = ({ children }) => {
  const account = useActiveAccount();
  const isConnected = !!account;
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const { mutate: sendReactTransaction, isPending } = useSendTransaction();
  const [currentCampaign, setCurrentCampaign] = useState({} as Campaign);
  const [currentProposition, setCurrentProposition] = useState(
    {} as Proposition,
  );

  //const BACKEND_URL = "http://127.0.0.1:5000";
  const BACKEND_URL = "https://raiseafrica.finance/flask";
  const [campaignsFilteredCategories, setCampaignsFilteredCategories] =
    useState<string[]>([]);
  const [propositionsFilteredCategories, setPropositionsFilteredCategories] =
    useState<string[]>([]);
  const [currentPost, setCurrentPost] = useState({} as Post);
  useEffect(() => {
    const campaign = localStorage.getItem("selectedCampaign");
    //const proposition = localStorage.getItem("selectedProposition");
    const post = localStorage.getItem("selectedPost");
    if (campaign) {
      setCurrentCampaign(JSON.parse(campaign));
    }

    if (post) {
      setCurrentPost(JSON.parse(post));
    }
  }, [campaignsFilteredCategories, propositionsFilteredCategories]);

  let { data: balanceData, isLoading: isBalanceDataLoading } = useReadContract({
    contract: RAF.contract,
    method: "function balanceOf(address) view returns (uint256)",
    params: [account?.address || ""],
  });

  let { data: price, isLoading: isPriceLoading } = useReadContract({
    contract: RAF.priceContract,
    method: "function get_raf_price() view returns (uint256)",
    params: [],
  });

  const rafBalance = isBalanceDataLoading
    ? 0
    : balanceData
      ? Number(toEther(balanceData as bigint))
      : 0;

  const rafPrice = isPriceLoading
    ? 0
    : price
      ? Number(Number(toEther(price as bigint)).toFixed(4))
      : 0;

  let { data: usdtBalanceData, isLoading: isUsdtBalanceDataLoading } =
    useReadContract({
      contract: USDT.contract,
      method: "function balanceOf(address) view returns (uint256)",
      params: [account?.address || ""],
    });

  const usdtBalance = isUsdtBalanceDataLoading
    ? 0
    : usdtBalanceData
      ? Number(toEther(usdtBalanceData as bigint))
      : 0;

  const createCampaign = async (
    _target: string,
    _deadline: string,
    _image: string,
    _startup: string,
  ) => {
    if (account) {
      try {
        const transaction = prepareContractCall({
          contract: CROWDFUNDING.contract,
          method:
            "function createCampaign(address _creator, uint256 _target, uint256 _deadline, string _image, string _startup) returns (uint256)",
          params: [
            account.address,
            toUnits(_target, 18),
            toUnits(_deadline, 18),
            _image,
            _startup,
          ],
        });
        const { transactionHash } = await sendTransaction({
          transaction,
          account,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createProposition = async (proposition: Proposition) => {
    axios
      .post(`${BACKEND_URL}/propositions/create`, proposition)
      .then((res) => {
        console.log(res.data);
        toast.success(
          "Your proposition has been created with success. Thank you!",
          {
            position: "top-center",
            theme: "dark",
          },
        );
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  const getPropositionTypes = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/propositions/types`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const createPost = async (post: Post) => {
    axios
      .post(`${BACKEND_URL}/posts/add`, post)
      .then((res) => {
        console.log(res.data);
        toast.success("Your post has been added to the forum. Thank you!", {
          position: "top-center",
          theme: "dark",
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  const commentPost = async (comment: PostComment) => {
    axios
      .post(`${BACKEND_URL}/posts/messages/add`, comment)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  const getPosts = async () => {
    const posts: Post[] = [];
    try {
      const response = await axios.get(`${BACKEND_URL}/posts/all`);
      for (let item of response.data) {
        const comments: PostComment[] = [];
        //@ts-ignore
        item.messages.map((message) => {
          comments.push({
            postId: item._id,
            author: message.sender_wallet_address,
            creation: new Date(item.date as string).getTime(),
            message: message.content,
          });
        });

        const tags =
          item.reference_id && item.reference_id != ""
            ? [{ text: "Proposition", value: item.reference_id } as Tag]
            : [{ text: "General", value: "General" } as Tag];

        const post: Post = {
          comments: comments,
          reference_id: item.reference_id,
          tags: tags,
          id: item._id,
          author: item.submitter_wallet_address,
          creation: new Date(item.date as string).getTime(),
          message: item.post_message,
          title: item.title,
        };
        posts.push(post);
      }
      console.log(posts);
      return posts;
    } catch (e) {
      console.log(e);
    }
  };

  const getPropositions = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/propositions`);
      const propositions: Proposition[] = [];
      for (let proposition of response.data) {
        const prop: Proposition = {
          id: proposition._id,
          status: proposition.status,
          creator: proposition.submitter_wallet_address,
          deadline:
            new Date(proposition.creation_date as string).getTime() +
            1000 * 60 * 60 * 24 * 10,
          description: proposition.description,
          percentage: proposition.votes,
          title: proposition.title ?? proposition.type.name,
          type: proposition.type.name,
          voters: proposition.voters,
        };
        if (
          propositionsFilteredCategories.length == 0 ||
          propositionsFilteredCategories.includes(prop.type)
        ) {
          console.log(propositionsFilteredCategories);
          propositions.push(prop);
        }
      }
      //console.log(propositions);
      return propositions;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPropositions = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/propositions`);
      const propositions: Proposition[] = [];
      for (let proposition of response.data) {
        const prop: Proposition = {
          id: proposition._id,
          status: proposition.status,
          creator: proposition.submitter_wallet_address,
          deadline:
            new Date(proposition.creation_date as string).getTime() +
            1000 * 60 * 60 * 24 * 10,
          description: proposition.description,
          percentage: proposition.votes,
          title: proposition.title ?? proposition.type.name,
          type: proposition.type.name,
          voters: proposition.voters,
        };
        if (prop.creator == account?.address) {
          propositions.push(prop);
        }
      }
      //console.log(propositions);
      return propositions;
    } catch (error) {
      console.log(error);
    }
  };

  const getRafTVL = async () => {
    const totalSupply = await readContract({
      contract: RAF.contract,
      method: "function totalSupply() view returns (uint256)",
      params: [],
    });

    const forTeam = await readContract({
      contract: RAF.contract,
      method: "function balanceOf(address) view returns (uint256)",
      params: ["0xB958fc996559442b2910907e972c6265FC236f02"],
    });

    const forCommunity = await readContract({
      contract: RAF.contract,
      method: "function balanceOf(address) view returns (uint256)",
      params: ["0xb882E4F509Bf01dc72a2DFe0f25069C7D04D6073"],
    });

    return Number(toEther(totalSupply - forTeam - forCommunity));
  };

  const voteProposition = async (proposition: Proposition, voter: Voter) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/propositions/vote`, {
        proposition_id: proposition.id,
        vote: voter.vote_worth,
        raf_total_supply: voter.raf_TVL,
        voter: voter.wallet_address,
      });
      const updatedProposition = response.data;

      localStorage.setItem(
        "selectedProposition",
        JSON.stringify({
          id: updatedProposition._id,
          status: updatedProposition.status,
          creator: updatedProposition.submitter_wallet_address,
          deadline:
            new Date(updatedProposition.creation_date as string).getTime() +
            1000 * 60 * 60 * 24 * 10,
          description: updatedProposition.description,
          percentage: updatedProposition.votes,
          title: updatedProposition.title ?? updatedProposition.type.name,
          type: updatedProposition.type.name,
          voters: updatedProposition.voters,
        }),
      );
      toast.success("Your vote succeed. Thank you!", {
        position: "top-center",
        theme: "dark",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const allowUsdtSpending = async (usdtAmount: number) => {
    if (account) {
      try {
        const approveTransaction = prepareContractCall({
          contract: USDT.contract,
          method:
            "function approve(address spender, uint256 amount) external returns (bool)",
          params: [account.address, toUnits(usdtAmount.toString(), 18)],
        });

        const usdtAllowanceData = await readContract({
          contract: USDT.contract,
          method:
            "function allowance(address owner, address spender) view returns (uint256)",
          params: [account.address, RAF.BUY_RAF_ADDRESS],
        });
        console.log("USDT ALLOWANCE:", usdtAllowanceData);
        //sendTransaction(approveTransaction);
        const { transactionHash } = await sendTransaction({
          transaction: approveTransaction,
          account,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const buyRaf = async (usdtAmount: number, rafAmount: number) => {
    if (account) {
      try {
        await allowUsdtSpending(usdtAmount);
        const contract = RAF.buyContract();
        if (contract) {
          await contract.buyRAFWithUSDT(
            toUnits(usdtAmount.toString(), 18),
            toUnits(rafAmount.toString(), 18),
          );
        }
      } catch (error) {
        console.log((error as Error).cause);
      }
    }
  };

  const { data: campaignList, isLoading: isCampaignListLoading } =
    useReadContract({
      contract: CROWDFUNDING.contract,
      method:
        "function getCampaigns() view returns ((address creator, uint256 target, uint256 deadline, uint256 amountCollected, string image, string startup, uint256[] donations, address[] donors, uint8 state)[])",
      params: [],
    });

  const getCampaigns = () => {
    const campaigns: Campaign[] = [];
    if (!isCampaignListLoading && campaignList != null) {
      campaignList.map((campaignItem, index) => {
        const startup: Startup = decryptObject(campaignItem.startup) as Startup;

        const campaign: Campaign = {
          creator: campaignItem.creator,
          id: index,
          image: "https://picsum.photos/id/14/2500/1667",
          startup: startup,
          target: Number(toEther(campaignItem.target)),
          raised: Number(toEther(campaignItem.amountCollected)),
          deadline: Number(toEther(campaignItem.deadline)),
        };
        console.log("Campaigns filter: ", campaignsFilteredCategories);
        if (
          campaignsFilteredCategories.length == 0 ||
          campaignsFilteredCategories.includes(startup.project.category)
        ) {
          campaigns.push(campaign);
        }
      });
    }
    return campaigns;
  };

  const { data: donorsData, isLoading: isDonorsDataLoading } = useReadContract({
    contract: CROWDFUNDING.contract,
    method:
      "function getDonors(uint256 _id) view returns (address[], uint256[])",
    params: [toUnits((currentCampaign.id || 0).toString(), 18)],
  });

  const donors = () => {
    const parsedDonors = [];
    if (!isDonorsDataLoading && donorsData != null) {
      const numberOfDonations = donorsData[0].length;

      for (let i = 0; i < numberOfDonations; i++) {
        parsedDonors.push({
          donor: donorsData[0][i],
          donation: toEther(donorsData[1][i]),
        });
      }
    }
    return parsedDonors;
  };

  return (
    <StateContext.Provider
      value={{
        client,
        account,
        wallet,
        rafBalance,
        usdtBalance,
        disconnect,
        isConnected,
        createCampaign,
        getCampaigns,
        currentCampaign,
        currentProposition,
        currentPost,
        donors,
        rafPrice,
        buyRaf,
        campaignsFilteredCategories,
        setCampaignsFilteredCategories,
        createProposition,
        getPropositions,
        getUserPropositions,
        getRafTVL,
        voteProposition,
        propositionsFilteredCategories,
        setPropositionsFilteredCategories,
        getPropositionTypes,
        getPosts,
        createPost,
        commentPost,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
