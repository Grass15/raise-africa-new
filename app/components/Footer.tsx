import Image from "next/image";
import brandLogo from "../../public/images/brandLogo.png";
import telegram from "../../public/images/telegram.png";
import discord from "../../public/images/discord.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer text-neutral-content p-20 mt-20">
      <nav className={"flex flex-col gap-5"}>
        <Link href={"/"}>
          <Image
            className={""}
            src={brandLogo}
            width={255}
            alt="Raise Africa Logo"
          />
        </Link>
        <p className="text-sm text-[#CFCFCF] w-64 ml-3">
          Join us in revolutionizing the way African businesses are funded.
          Let`&apos;`s create a sustainable future Together.
        </p>
        <div className={"flex flex-row gap-4 ml-3"}>
          <Link href={"https://t.me/raise_africa"} target={"_blank"}>
            <div className={""} style={{ width: 50, height: 50 }}>
              <Image
                src={telegram}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
                alt="Rais Africa telegram link"
              />
            </div>
          </Link>
          <Link href={"https://discord.gg/sJX2pxDE"} target={"_blank"}>
            <div className={""} style={{ width: 50, height: 50 }}>
              <Image
                src={discord}
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
                alt="Raise Africa Discord link"
              />
            </div>
          </Link>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title text-white font-semibold text-xl">Pages</h6>
        <Link className={`hover:text-primary`} href={"/campaigns"}>
          Campaigns
        </Link>
        <Link className={`hover:text-primary`} href={"/propositions"}>
          Propositions
        </Link>

        <Link className={`hover:text-primary`} href={"/forum"}>
          Forum
        </Link>
        <Link className={`hover:text-primary`} href={"/about"}>
          About Us
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title text-white font-semibold text-lg">
          Terms & Conditions
        </h6>
        <Link className={`hover:text-primary`} href={"/terms-of-use"}>
          Terms of use
        </Link>
        <Link className={`hover:text-primary`} href={"/privacy-policy"}>
          Privacy policy
        </Link>
        <Link className={`hover:text-primary`} href={"/cookie-policy"}>
          Cookie policy
        </Link>
        {/*<a className="link link-hover">Terms of use</a>*/}
        {/*<a className="link link-hover">Privacy policy</a>*/}
        {/*<a className="link link-hover">Cookie policy</a>*/}
      </nav>

      <nav className={"flex flex-col items-center align-middle"}>
        <Link
          className={"btn btn-primary mt-16"}
          href="/WHITEPAPER_EN-V3.pdf"
          download="RAISE_AFRICA_WHITEPAPER.pdf" // Replace with the name you want the file to be downloaded as
        >
          Whitepaper
        </Link>
      </nav>
    </footer>
  );
};
export default Footer;
