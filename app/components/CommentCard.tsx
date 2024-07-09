import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const CommentCard = ({ comment = {} as PostComment }) => {
  return (
    <div
      className={
        "w-10/12 flex flex-col rounded bg-secondary shadow gap-6 px-8 py-4 cursor-pointer"
      }
    >
      <p className={"w-11/12 text-sm"}>{comment.message}</p>
      <p className={"text-xs"}>
        by <span className={"text-primary"}>{comment.author}</span>
      </p>
    </div>
  );
};
export default CommentCard;
