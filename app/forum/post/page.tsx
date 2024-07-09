"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "../../../public/images/avatar.png";
import { useStateContext } from "../../context";
import FormField from "../../components/FormField";
import CommentCard from "../../components/CommentCard";
import PropositionCard from "../../components/PropositionCard";
import { toast } from "react-toastify";

const PostPage = () => {
  const { account, commentPost } = useStateContext();
  const [currentPost, setCurrentPost] = useState({} as Post);
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    const post = localStorage.getItem("selectedPost");
    if (post) {
      setCurrentPost(JSON.parse(post));
    }
  }, []);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const comment: PostComment = {
      author: account.address,
      creation: 0,
      message: commentText,
      postId: currentPost.id,
    };
    try {
      await commentPost(comment);
      toast.success(
        "Your proposition has been created with success. Thank you!",
        {
          position: "top-center",
          theme: "dark",
        },
      );
      //router.push("/forum");
    } catch (e) {
      console.log(e);
    }
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
        </div>
        <div
          className={
            "w-full flex flex-col rounded bg-secondary shadow gap-5 px-14 py-8 cursor-pointer mt-10"
          }
        >
          <div className={"w-full flex flex-row gap-4 items-center"}>
            <div className=" flex avatar items-center ">
              <div className="w-14 rounded-full">
                <Image src={avatar} alt="Profile image" />
              </div>
            </div>
            <div className={"flex flex-col gap-2 overflow-hidden"}>
              <h4 className={"text-ellipsis overflow-hidden text-sm"}>
                {currentPost.author}
              </h4>
            </div>
          </div>
          <p className={"text-md font-semibold text-primary w-10/12 text-lg"}>
            {currentPost.title}
          </p>
          <p className={"w-11/12 text-sm"}>{currentPost.message}</p>
          <div className={"flex flex-row justify-between mt-2 w-11/12 "}>
            <div>
              {currentPost.tags?.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-primary rounded-full badge-outline"
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={
            "my-8 mx-auto text-secondary font-semibold text-center text-2xl"
          }
        >
          Comments
        </div>
        <form
          className={"flex flex-col p-6 bg-secondary gap-6 rounded"}
          onSubmit={handleAddComment}
        >
          <FormField
            handleChange={(e) => setCommentText(e.target.value)}
            inputType={"text"}
            labelName={""}
            placeholder={"Type here your comment"}
          />
          <div className={"grid justify-items-end"}>
            <div className={"flex flex-row  gap-3"}>
              <input
                value={"Cancel"}
                type={"reset"}
                className={"btn btn-outline btn-primary"}
              />

              <input
                value={"Comment"}
                type={"submit"}
                className={"btn btn-primary"}
              />
            </div>
          </div>
        </form>
        <div className={"grid justify-items-end gap-4 mt-10 w-full"}>
          {currentPost.comments?.map((comment, index) => (
            <CommentCard comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostPage;
