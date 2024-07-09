"use client";
import { forumTabItems } from "../constants";
import CampaignsList from "../components/CampaignsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Filter from "../components/Filter";
import React, { useEffect, useState } from "react";
import ForumCard from "../components/ForumCard";
import { useStateContext } from "../context";
import PropositionCard from "../components/PropositionCard";

const ForumPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { getPosts } = useStateContext();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
        console.log(posts);
      } catch (err) {
        console.log("Error occured when fetching posts");
      }
    })();
  }, []);
  //@ts-ignore
  const activateTab = (tabItem) => {
    setActiveTab(tabItem);
  };
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
            <Link
              className={"btn btn-sm w-fit sm:btn-md btn-primary"}
              href={"/forum/new-post"}
            >
              New Post
            </Link>
          </div>
          <div className={"w-full"}>
            <ul className="menu menu-horizontal bg-none gap-2 flex flex-wrap">
              {forumTabItems.map((tabItem, index) => (
                <li
                  key={0}
                  className={
                    "px-1 rounded-full text-black font-medium " +
                    (activeTab == "tabItem"
                      ? "bg-primary"
                      : "text-primary border border-primary")
                  }
                  onClick={(tabItem) => activateTab(tabItem)}
                >
                  <span className={"capitalize"}>{tabItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={"flex flex-col mt-10 gap-14 "}>
          {posts?.map((post, index) => (
            <ForumCard key={index + 1} post={post} />
          ))}
        </div>
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default ForumPage;
