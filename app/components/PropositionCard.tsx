import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { useRouter } from "next/navigation";
import { daysLeft } from "../utils";

// @ts-ignore
const PropositionCard = ({ proposition }) => {
  const router = useRouter();
  const actualProposition = proposition as Proposition;
  const remainingDays = daysLeft(actualProposition.deadline);
  const navigateToPropositionDetails = () => {
    localStorage.setItem(
      "selectedProposition",
      JSON.stringify(actualProposition),
    );
    router.push("/propositions/proposition-details");
  };
  return (
    <div
      className={
        "flex flex-col gap-3 min-[935px]:w-96 w-10/12 cursor-pointer rounded bg-[#222221] p-4"
      }
      onClick={navigateToPropositionDetails}
    >
      <div className="flex flex-row justify-between align-middle items-center">
        <div className={"flex w-2/3 flex-row gap-2 align-middle"}>
          <div className="avatar cursor-pointer items-center align-middle">
            <div className="w-10 rounded-full mr-3">
              <Image src={avatar} alt="Profile image" />
            </div>
          </div>
          <span
            className={
              "text-sm text-primary text-ellipsis overflow-hidden whitespace-nowrap m-auto"
            }
          >
            {"0xb2d83C2F63D5A915E3F1A51f07707894562f795671236657"}
          </span>
        </div>
        <div className="badge badge-primary rounded text-xs font-medium capitalize">
          {actualProposition.status}
        </div>
      </div>
      <div className={"w-4/6"}>
        <span
          className={
            "text-white font-semibold text-ellipsis overflow-hidden whitespace-nowrap m-auto"
          }
        >
          {actualProposition.title}
        </span>
      </div>
      <p className={"w-11/12 text-secondary text-xs line-clamp-2"}>
        {actualProposition.description}
      </p>
      <progress
        className="progress progress-primary w-full my-1 rounded"
        value={actualProposition.percentage}
        max="100"
      ></progress>
      <div className={"flex flex-row justify-between"}>
        <div className={"font-semibold text-secondary"}>
          <span className={"text-primary"}>
            {actualProposition.voters.length}{" "}
          </span>
          Votes
        </div>

        <div className={"text-white font-medium"}>
          <span>{remainingDays} days left</span>
        </div>
      </div>
    </div>
  );
};

export default PropositionCard;
