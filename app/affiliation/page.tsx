"use client";
import FormField from "../components/FormField";
import { useEffect, useState } from "react";
import { useStateContext } from "../context";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import CopyButton from "../components/CopyButton";

const AffiliationPage = () => {
  const [affiliationId, setAffiliationId] = useState<string>("");
  const { integrateAffiliation, getAffiliateByAddress } = useStateContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const affiliate = await getAffiliateByAddress();
        setAffiliationId(affiliate["affiliation-id"]);
      } catch (err) {
        console.log(err);
        setAffiliationId("");
      }
    })();
  }, []);
  const generateAffiliationId = async () => {
    try {
      setIsLoading(true);
      const id = await integrateAffiliation();
      setAffiliationId(id);
      setIsLoading(false);
      toast.success("Affiliation link successfully generated.", {
        position: "top-center",
        theme: "dark",
      });
    } catch (e) {
      console.log(e);
      toast.error(
        "There was an issue while making the transaction. Try again please",
        {
          position: "top-center",
          theme: "dark",
        },
      );
    }
  };
  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg  pt-5 mx-auto sm:py-5 ">
        <div
          className={
            "rounded bg-[#222221] flex justify-center items-center flex-col sm:p-10 p-4"
          }
        >
          <div
            className={
              "flex flex-col gap-2 justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]"
            }
          >
            {isLoading && <Loader />}
            <h1 className={"sm:text-xl text-primary font-medium"}>
              Earn USDT with Raise Africa affiliation program
            </h1>
          </div>
          <p className={"text-white p-4"}>
            Join our affiliate program and start earning today! Generate your
            own unique affiliate link and share it with others. Every time a
            customer uses your link to purchase RAF tokens, you&apos;ll earn 10%
            of the total purchase amount. It&apos;s that easy—share, refer, and
            earn!!
          </p>
          {affiliationId ? (
            <div className={"indicator"}>
              <span
                className={"text-primary"}
              >{`https://raiseafrica.finance?ref=${affiliationId}`}</span>
              <CopyButton
                text={`https://raiseafrica.finance?ref=${affiliationId}`}
              />
            </div>
          ) : (
            <button
              className={"btn btn-primary my-4"}
              onClick={generateAffiliationId}
            >
              Generate
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AffiliationPage;
