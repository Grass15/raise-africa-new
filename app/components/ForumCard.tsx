"use client";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { useStateContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const ForumCard = ({ post = {} as Post }) => {
  const router = useRouter();
  const navigateToPost = () => {
    localStorage.setItem("selectedPost", JSON.stringify(post));
    router.push("/forum/post");
  };
  return (
    <div
      className={
        "w-10/12 flex flex-col rounded bg-secondary shadow h-52 gap-3 px-8 py-4 cursor-pointer"
      }
      onClick={navigateToPost}
    >
      <div className={"w-full flex flex-row gap-4 items-center"}>
        <div className=" flex avatar items-center ">
          <div className="w-14 rounded-full">
            <Image src={avatar} alt="Profile image" />
          </div>
        </div>
        <div className={"flex flex-col gap-2 overflow-hidden"}>
          <h4 className={"text-ellipsis overflow-hidden text-xs"}>
            {post.author}
          </h4>
        </div>
      </div>
      <p className={"text-md font-semibold text-primary w-10/12"}>
        {post.title}
      </p>
      <p
        className={
          "overflow-hidden whitespace-nowrap text-ellipsis w-11/12 text-xs"
        }
      >
        {post.message}
      </p>
      <div className={"flex flex-row justify-between mt-2 w-11/12 "}>
        <div>
          {post.tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-primary rounded-full badge-outline"
            >
              {tag.text}
            </div>
          ))}
        </div>
        <div className={"flex flex-row gap-2 items-center"}>
          <FontAwesomeIcon className={"text-primary"} icon={faComment} />
          <span>{post.comments.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
