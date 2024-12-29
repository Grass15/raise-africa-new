import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import bg from "../public/images/home/heroBackground.png";
import section2Bg from "../public/images/home/section2Background.png";
import RafUsdtRate from "./components/RafUsdtRate";
import Hero from "./components/Hero";
import earth from "../public/images/home/earth-floating-space.png";
import section3Card1Bg from "../public/images/home/card-1.png";
import section3Card2Bg from "../public/images/home/card-2.png";
import section3Card3Bg from "../public/images/home/card-3.png";
import card1Icon from "../public/images/home/openWallet.png";
import card2Icon from "../public/images/home/buyCart.png";
import card3Icon from "../public/images/home/income.png";
import globalPresence from "../public/images/home/globalPresence.png";
import startupIcon from "../public/images/home/startup.png";
import onChainRaf from "../public/images/home/on_chain_feat.png";
import Card from "./components/Card";
import CardNoButton from "./components/CardNoButton";
import TranslationWrapper from "./components/TranslationWrapper";
import { cookies } from "next/headers";

const Page = () => {
  return (
    <section className={"flex flex-col gap-6 py-5 px-5"}>
      <div
        className="max-w-screen-lg  pt-5 mx-auto sm:py-5"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Hero />
        <RafUsdtRate />
      </div>
      <div
        className="grid max-w-screen-lg pt-5 mb-3 mx-auto sm:gap-5 xl:gap-0 sm:grid-cols-12 sm:py-5"
        style={{
          backgroundImage: `url(${section2Bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="hidden sm:ml-6 lg:mt-0 sm:col-span-6 sm:flex sm:items-center ">
          {/*<Image src={Logo} width={260} height={200} alt="Crypto Wallet Icon" />*/}
          <div style={{ width: 391, height: 300 }}>
            <Image
              src={earth}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="Earth showing Africa"
            />
          </div>
        </div>
        <div className="mr-auto flex flex-col gap-2 place-self-center sm:col-span-6">
          <h2 className=" text-primary text-center sm:text-left tracking-wide leading-10 xl:text-lg">
            What we are doing
          </h2>
          <h3 className="max-w-lg text-center sm:text-left mb-2 text-xl font-semibold tracking-wide leading-10 md:text-2xl xl:text-3xl">
            Opportunity to invest in Africa development
          </h3>
          <p className="max-w-xl text-center sm:text-left mt-3 mb-3 leading-8 sm:mb-5 dark:text-gray-400">
            Raise Africa now provides the opportunity for any African business,
            startup or established, to raise funds via blockchain technology. We
            empower our community to invest in a variety of impactful projects
            across different sectors, whether linked to blockchain, web3, or
            not, fostering sustainable development across the continent.
          </p>
          <div className={"flex max-[640px]:place-self-center flex-row gap-6"}>
            <Link href={"/about"} className="btn btn-primary mr-3 font-medium ">
              More About us
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "flex mt-5 pt-5 flex-col gap-3 place-self-center items-center sm:py-5"
        }
      >
        <h2 className=" text-primary tracking-wide leading-10 xl:text-lg">
          How it works
        </h2>
        <h3 className="max-w-lg text-xl font-semibold tracking-wide leading-10 md:text-2xl xl:text-3xl">
          Easy steps to success
        </h3>
        <p className="mt-3 max-w-screen-lg mb-3 text-center leading-8 sm:mb-5 dark:text-gray-400">
          Raise Africa simplifies the process of investing in and raising funds
          for African businesses through blockchain. Follow these steps to get
          started:
        </p>
        <div
          className={
            "flex flex-col min-[990px]:flex-row gap-5 justify-between "
          }
        >
          <Card
            background={section3Card1Bg}
            icon={card1Icon}
            title={"Connect Wallet"}
            description={
              "Link your digital wallet to the platform to begin investing or raising funds. "
            }
            forConnect={true}
            buttonText={"Connexion"}
          />
          <Card
            background={section3Card2Bg}
            icon={card2Icon}
            title={"Buy RAF Token"}
            description={
              "Purchase the RAF token with USDT to support projects and earn potential returns. "
            }
            forBuy={true}
            buttonText={"Buy RAF"}
          />
          <Card
            background={section3Card3Bg}
            icon={card3Icon}
            title={"Invest or Raise"}
            description={
              "Investors or companies can raise funds for ventures driving Africa’s growth."
            }
            forCampaign={true}
            buttonText={"Campaigns"}
          />
        </div>
      </div>
      <div
        className={
          "grid max-w-screen-lg py-5 mx-auto sm:gap-5 xl:gap-0  sm:grid-cols-12"
        }
      >
        <div className={"flex flex-col gap-2 place-self-center sm:col-span-6"}>
          <h2 className=" text-primary text-center sm:text-left tracking-wide xl:text-lg">
            Our Vision
          </h2>
          <h3 className="max-w-lg text-center sm:text-left text-xl font-semibold tracking-wide leading-10 md:text-2xl xl:text-3xl">
            Investors from all over the world
          </h3>
          <p className="mt-3 max-w-screen-lg mb-3 text-center leading-8 sm:mb-5 sm:text-left dark:text-gray-400">
            Raise Africa aims to build a global network of investors supporting
            African businesses, whether blockchain-related or not. By connecting
            investors from diverse backgrounds, we foster a collaborative
            environment that drives sustainable growth and development across
            the continent. Join us in making a tangible impact on Africa’s
            future through strategic investments and partnerships.
          </p>
        </div>
        <div className={"sm:col-span-6"}>
          <Image
            src={globalPresence}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="Raise Africa global Presence"
          />
        </div>
      </div>
      <div
        className={
          "flex max-w-screen-lg mt-5 pt-5 flex-col gap-3 place-self-center items-center sm:py-5"
        }
      >
        <h2 className=" text-primary tracking-wide leading-10 xl:text-lg">
          What we offer
        </h2>
        <h3 className="max-w-lg text-xl font-semibold tracking-wide leading-10 md:text-2xl xl:text-3xl">
          All you need is here
        </h3>
        <p className="mt-3 max-w-screen-lg mb-3 text-center leading-8 sm:mb-5 dark:text-gray-400">
          Raise Africa offers a comprehensive platform to meet all your
          investment and fundraising needs, connecting businesses and investors
          through blockchain across Africa.
        </p>
        <div
          className={
            "flex bg-no-repeat bg-center bg-contain w-full flex-col gap-5 px-6 sm:gap-y-14"
          }
          style={{
            backgroundImage: `url(${onChainRaf.src})`,
          }}
        >
          <div
            className={
              "flex flex-col items-center gap-5 sm:flex-row justify-between w-full"
            }
          >
            <CardNoButton
              icon={startupIcon}
              title={"Access to businesses"}
              description={
                "Discover and invest in African companies aligned with your values and goals."
              }
            />
            <CardNoButton
              icon={startupIcon}
              title={"Access to investors"}
              description={
                "African companies can connect with a global network of investors ready to fund impactful projects."
              }
            />
          </div>

          <div
            className={
              "flex items-center flex-col gap-5 sm:flex-row justify-between w-full"
            }
          >
            <CardNoButton
              icon={startupIcon}
              title={"Affordable"}
              description={
                "Transparent pricing and minimal fees ensure maximum returns on investments."
              }
            />
            <CardNoButton
              icon={startupIcon}
              title={"Disbursement"}
              description={
                "Secure and efficient disbursement of funds for timely investment completion. "
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
