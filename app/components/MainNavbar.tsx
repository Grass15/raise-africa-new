"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLogo from "../../public/images/brandLogo.png";
import logo from "../../public/images/logo.png";
import WalletIcon from "../../public/images/home/digital-wallet.png";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../public/images/avatar.png";
import { ButtonConnect } from "./ButtonConnect";
import { useStateContext } from "../context";
import ProfileModal from "./ProfileModal";
import ButtonBuy from "./ButtonBuy";
import BuyModal from "./BuyModal";

export function MainNavbar() {
  const pathname = usePathname();
  const { isConnected } = useStateContext();

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown min-[850px]:hidden">
          <div tabIndex={0} role="button" className="btn ">
            <FontAwesomeIcon icon={faBars} size={"xl"} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                className={`hover:text-primary ${pathname === "/campaigns" ? "text-primary" : ""}`}
                href={"/campaigns"}
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-primary ${pathname === "/propositions" ? "text-primary" : ""}`}
                href={"/propositions"}
              >
                Propositions
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-primary ${pathname === "/forum" ? "text-primary" : ""}`}
                href={"/forum"}
              >
                Forum
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-primary ${pathname === "/about" ? "text-primary" : ""}`}
                href={"/about"}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-primary ${pathname === "/waiting-list" ? "text-primary" : ""}`}
                href={"/waiting-list"}
              >
                Waiting list
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-primary ${pathname === "/faq" ? "text-primary" : ""}`}
                href={"/faq"}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          <Image
            className={"hidden sm:flex"}
            src={brandLogo}
            width={255}
            alt="Raise Africa Logo"
          />
          <div className={"flex sm:hidden"} style={{ width: 50, height: 50 }}>
            <Image
              src={logo}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="Raise Africa Logo"
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden min-[850px]:flex">
        <ul className="menu menu-horizontal  sm:px-1 ">
          <li>
            <Link
              className={`hover:text-primary ${pathname.includes("/campaigns") ? "text-primary" : ""}`}
              href={"/campaigns"}
            >
              Campaigns
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-primary ${pathname.includes("/propositions") ? "text-primary" : ""}`}
              href={"/propositions"}
            >
              Propositions
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-primary ${pathname === "/forum" ? "text-primary" : ""}`}
              href={"/forum"}
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-primary ${pathname === "/about" ? "text-primary" : ""}`}
              href={"/about"}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-primary ${pathname === "/waiting-list" ? "text-primary" : ""}`}
              href={"/waiting-list"}
            >
              Waiting list
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-primary ${pathname === "/faq" ? "text-primary" : ""}`}
              href={"/faq"}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <BuyModal />
        <details className="hidden sm:dropdown">
          <summary className="btn no-bg border-0 hover:bg-none">
            <FontAwesomeIcon icon={faGlobe} size={"xl"} />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
            <li>
              <a>English</a>
            </li>
            <li>
              <a>French</a>
            </li>
          </ul>
        </details>
        {isConnected ? <ProfileModal /> : <ButtonConnect simple={false} />}
      </div>
    </div>
  );
}
