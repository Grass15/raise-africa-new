"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import Link from "next/link";
import { usePathname } from "next/navigation";

// @ts-ignore
const Header = ({ categories, title }) => {
  const pathname = usePathname();
  return (
    <div className={"w-full justify-between flex flex-col gap-5"}>
      <div className="w-full flex flex-row max-[500px]:flex-col justify-between gap-5 align-middle">
        <div className="flex flex-row text-[#9EA1B4] align-middle">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-[#222221] rounded-full w-72 h-10 outline-none px-5 pr-10 text-sm focus:ring-blue-500 focus:outline-none "
          />
          <button type="submit" className="-ml-14 mt-2 bg-[#222221] h-fit z-20">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <Link
          className={"btn btn-sm w-fit sm:btn-md btn-primary"}
          href={pathname + "/" + "create-" + (title as string).toLowerCase()}
        >
          Create a {title}
        </Link>
      </div>
      <Filter categories={categories} title={title} />
    </div>
  );
};
export default Header;
