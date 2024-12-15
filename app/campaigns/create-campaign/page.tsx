"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  startupCategories,
  sectorsAndIndustries,
  africanCountries,
} from "../../constants";
import FormField from "../../components/FormField";
import moneyBag from "../../../public/images/money-bag.png";
import Image from "next/image";
import Stakeholders from "../../components/Stakeholders";
import Loader from "../../components/Loader";
import { encryptObject, structCampaign, destructCampaign } from "../../utils";
import { useStateContext } from "../../context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SocialNetwork from "../../components/SocialNetwork";
import AlertModal from "../../components/AlertModal";
import { CldUploadWidget } from "next-cloudinary";
import UploadWidget from "../../components/UploadWidget";
import { toast } from "react-toastify";
import Link from "next/link";

const CreateCampaignPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign, account, getUserSavedCampaign, saveCampaign } =
    useStateContext();
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm<CampaignInputs>();

  const [founders, setFounders] = useState<Founder[]>([]);
  const [socialNetworks, setSocialNetworks] = useState([] as SocialNetwork[]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [raiseThroughBonds, setRaiseThroughBonds] = useState<boolean>(false);
  const [isStartup, setIsStartup] = useState<boolean>(false);
  const [demoUrl, setDemoUrl] = useState<string>("");
  const [introVideoUrl, setIntroVideoUrl] = useState<string>("");
  const [businessPlanUrl, setBusinessPlanUrl] = useState<string>("");
  const [financialStatementUrl, setFinancialStatementUrl] =
    useState<string>("");

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [campaignForm, setCampaignForm] = useState<CampaignInputs>(
    {} as CampaignInputs,
  );

  const selectedSector: string = watch("sector");
  const selectedNftType: string = watch("nftType");
  const selectedCompanyType: string = watch("companyType");

  const CountriesOptions: { key: number; value: string; text: string }[] = [];
  africanCountries.forEach((country) => {
    const option = {
      key: CountriesOptions.length,
      value: country.toLowerCase(),
      text: country,
    };
    CountriesOptions.push(option);
  });

  useEffect(() => {
    const fetchSavedData = async () => {
      try {
        const campaign = (await getUserSavedCampaign()) as Campaign;
        if (campaign) {
          const { campaignForm, socialNetworks } = destructCampaign(campaign);
          reset(campaignForm);

          setSocialNetworks(socialNetworks);
          const companyFounders = campaignForm.founders;
          setFounders(companyFounders);
          setDemoUrl(campaignForm.demo);
          setIntroVideoUrl(campaignForm.foundersVideo);
          setBusinessPlanUrl(campaignForm.businessPlan);
          setFinancialStatementUrl(campaignForm.financialStatements || "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSavedData();
  }, [reset]);

  useEffect(() => {
    setIndustries(sectorsAndIndustries.get(selectedSector) || []);
  }, [selectedSector]);

  useEffect(() => {
    setRaiseThroughBonds(selectedNftType == "Bond");
  }, [selectedNftType]);

  useEffect(() => {
    setIsStartup(selectedCompanyType == "Startup");
  }, [selectedCompanyType]);

  const handleUploadDemoSuccess = (url: string, property: string) => {
    switch (property) {
      case "demo":
        setDemoUrl(url);
        break;
      case "introVideo":
        setIntroVideoUrl(url);
        break;
      case "businessPlan":
        setBusinessPlanUrl(url);
        break;
      case "financialStatement":
        setFinancialStatementUrl(url);
    }
    console.log("Uploaded URL:", url);
  };

  const handleStakeholdersUpdate = (founder: Founder) => {
    setFounders([...founders, founder]);
  };
  const handleSocialNetworksUpdate = (socialNetwork: SocialNetwork) => {
    let update = false;
    socialNetworks.map((link) => {
      if (link.name == socialNetwork.name) {
        link.link = socialNetwork.link;
        update = true;
      }
    });
    if (update) {
      setSocialNetworks([...socialNetworks]);
    } else {
      setSocialNetworks([...socialNetworks, socialNetwork]);
    }
  };

  const handleConfirm = async () => {
    setIsAlertOpen(false);
    campaignForm.demo = demoUrl;
    campaignForm.foundersVideo = introVideoUrl;
    campaignForm.businessPlan = businessPlanUrl;
    campaignForm.financialStatements = financialStatementUrl;

    const campaign: Campaign = structCampaign(
      campaignForm,
      founders,
      socialNetworks,
      "Complete" as CampaignStatus,
    );
    setIsLoading(true);
    try {
      await createCampaign(campaign);
      setIsLoading(false);
      toast.success(
        "Your campaign has been submitted successfully.\nWe will contact you soon for the next steps",
        {
          position: "top-center",
          theme: "dark",
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setIsAlertOpen(false);
  };

  const onSave = async () => {
    const campaignForm = getValues();
    campaignForm.demo = demoUrl;
    campaignForm.foundersVideo = introVideoUrl;
    campaignForm.businessPlan = businessPlanUrl;
    campaignForm.financialStatements = financialStatementUrl;
    const campaign = structCampaign(
      campaignForm,
      founders,
      socialNetworks,
      "Incomplete" as CampaignStatus,
    );
    setIsLoading(true);
    try {
      await saveCampaign(campaign);
      setIsLoading(false);
      toast.success("Your campaign has been saved successfully.", {
        position: "top-center",
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
      toast.error(
        "There was an issue while saving your campaign. Try again please",
        {
          position: "top-center",
          theme: "dark",
        },
      );
    }
  };

  const onSubmit: SubmitHandler<CampaignInputs> = async (
    campaignInputs: CampaignInputs,
  ) => {
    if (
      !(
        (demoUrl && demoUrl != "") ||
        (businessPlanUrl && businessPlanUrl != "") ||
        (introVideoUrl && introVideoUrl != "")
      )
    ) {
      toast.error("Please Verify that all required files have been uploaded!", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }
    if (socialNetworks.length < 3) {
      toast.error("Please add your social networks!", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }
    if (founders.length < 1) {
      toast.error("Please add at least one founder!", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }
    setCampaignForm(campaignInputs);
    setIsAlertOpen(true);
  };

  const CategoryOptions: { key: number; value: string; text: string }[] = [];
  startupCategories.forEach((category) => {
    const option = {
      key: CategoryOptions.length,
      value: category.toLowerCase(),
      text: category,
    };
    CategoryOptions.push(option);
  });

  // console.log(watch("projectNeed")); // watch input value by passing the name of it

  const sectorOptions: { key: number; value: string; text: string }[] = [];
  sectorsAndIndustries.forEach((industries, sector) =>
    sectorOptions.push({
      key: sectorOptions.length,
      value: sector,
      text: sector,
    }),
  );

  const industryOptions: { key: number; value: string; text: string }[] = [];
  industries.map((industry, index) =>
    industryOptions.push({
      key: index,
      value: industry,
      text: industry,
    }),
  );

  return (
    <section className={"flex flex-col gap-6 px-5 py-5 w-full "}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg  pt-5 mx-auto sm:py-5 ">
        {isLoading && <Loader />}
        <div
          className={
            "rounded bg-[#222221] flex justify-center items-center flex-col sm:p-10 p-4"
          }
        >
          <div
            className={
              "flex justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]"
            }
          >
            <h1 className={"sm:text-xl text-primary  font-medium"}>
              Start a Campaign
            </h1>
          </div>

          <form
            className={"w-full lg:w-10/12 flex flex-col mt-8 gap-10"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={"gap-8"}>
              <h2>General Information</h2>
              <div className={"w-full flex flex-wrap gap-8"}>
                <FormField
                  //@ts-ignore
                  inputType={"text"}
                  labelName={"Company Name *"}
                  placeholder={"Coteus Technology"}
                  error={
                    errors.companyName ? errors.companyName.message : undefined
                  }
                  {...register("companyName", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  inputType={"date"}
                  labelName={"Date of Establishment "}
                  error={
                    errors.companyCreationDate
                      ? errors.companyCreationDate.message
                      : undefined
                  }
                  {...register("companyCreationDate")}
                />
                <FormField
                  //@ts-ignore
                  isSelect={true}
                  labelName={"Country *"}
                  options={CountriesOptions}
                  error={errors.country ? errors.country.message : undefined}
                  {...register("country", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  isSelect={true}
                  labelName={"Company Type *"}
                  options={[
                    "Startup",
                    "Small Enterprise",
                    "Medium Enterprise",
                  ].map((type, index) => ({
                    key: index,
                    value: type,
                    text: type,
                  }))}
                  error={
                    errors.companyType ? errors.companyType.message : undefined
                  }
                  {...register("companyType", {
                    required: "This field is required",
                  })}
                />
                {isStartup && (
                  <FormField
                    //@ts-ignore
                    inputType={"text"}
                    labelName={"Accelerator or Incubator *"}
                    error={
                      errors.acceleratorOrIncubator
                        ? errors.acceleratorOrIncubator.message
                        : undefined
                    }
                    {...register("acceleratorOrIncubator")}
                  />
                )}
              </div>

              <div className={"w-full flex flex-wrap gap-8"}>
                <FormField
                  //@ts-ignore
                  isSelect={true}
                  labelName={"Sector *"}
                  options={sectorOptions}
                  error={errors.sector ? errors.sector.message : undefined}
                  {...register("sector", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  isSelect={true}
                  labelName={"Industry *"}
                  placeholder={"Computer Science"}
                  options={industryOptions}
                  error={errors.industry ? errors.industry.message : undefined}
                  {...register("industry", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            <div className={"flex flex-col gap-2 mt-2"}>
              <h2>Company Description</h2>
              <div className={"flex flex-col gap-8"}>
                <FormField
                  //@ts-ignore
                  labelName={
                    "Brief description of your company (50 characters or less): *"
                  }
                  placeholder={"John"}
                  isTextArea={true}
                  error={
                    errors.companyBriefDescription
                      ? errors.companyBriefDescription.message
                      : undefined
                  }
                  {...register("companyBriefDescription", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  labelName={
                    "Describe what your company does and what you aim to achieve *"
                  }
                  placeholder={
                    "An hospital that uses mean test to charge the fees"
                  }
                  isTextArea={true}
                  error={
                    errors.projectDescription
                      ? errors.projectDescription.message
                      : undefined
                  }
                  {...register("projectDescription", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  labelName={
                    "What problem does your company solve and what is your solution? *"
                  }
                  placeholder={
                    "A Health system that gives the same chance to everybody (Fees depend on individual financial status) with the best care quality"
                  }
                  isTextArea={true}
                  error={
                    errors.projectInnovation
                      ? errors.projectInnovation.message
                      : undefined
                  }
                  {...register("projectInnovation", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  labelName={
                    "Who are your main competitors? What do you understand about your market that your competitors do not? *"
                  }
                  placeholder={
                    "A Health system that gives the same chance to everybody (Fees depend on individual financial status) with the best care quality"
                  }
                  isTextArea={true}
                  error={
                    errors.competitors ? errors.competitors.message : undefined
                  }
                  {...register("competitors", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>

            <div>
              Founders *
              <p className={"text-primary"}>
                Please click on the plus icon (+) to add a founder after filling
                their information
              </p>
              <ul className={"mt-4 mb-8"}>
                {founders.map((stakeholder, i) => (
                  <li key={i}>
                    <Link
                      className={"text-primary"}
                      href={stakeholder.linkedIn}
                    >
                      {`${stakeholder.firstName} 
                ${stakeholder.lastName} 
                (${stakeholder.role})`}
                    </Link>
                  </li>
                ))}
              </ul>
              <Stakeholders
                onStakeholdersUpdate={handleStakeholdersUpdate}
                founders={founders}
              />
              <label className="form-control w-max flex-1 flex flex-col mt-2">
                <div className="label">
                  <span className={"label-text"}>
                    Upload founders introduction video
                  </span>
                </div>

                <UploadWidget
                  onUploadSuccess={handleUploadDemoSuccess}
                  property={"introVideo"}
                />
              </label>
              {introVideoUrl && (
                <div>
                  <video controls width="600" src={introVideoUrl}></video>
                </div>
              )}
            </div>
            <div className={"flex flex-col mt-2 gap-2"}>
              <h2>Traction and Product</h2>
              <div className={"w-full flex flex-wrap gap-8"}>
                <FormField
                  //@ts-ignore
                  inputType={"number"}
                  labelName={
                    "How many active users or customers do you currently have? *"
                  }
                  placeholder={"2000"}
                  error={
                    errors.activeUsers ? errors.activeUsers.message : undefined
                  }
                  {...register("activeUsers", {
                    required: "This field is required",
                  })}
                />
                <label className="form-control w-max flex-1 flex flex-col">
                  <div className="label">
                    <span className={"label-text"}>
                      Upload your latest certified financial statements: (if
                      applicable)
                    </span>
                  </div>
                  <UploadWidget
                    onUploadSuccess={handleUploadDemoSuccess}
                    property={"financialStatement"}
                    resourceType={"raw"}
                  />
                </label>
                {financialStatementUrl && (
                  <iframe
                    src={financialStatementUrl}
                    title="PDF Preview"
                    className="w-full h-96 border-2"
                  />
                )}
                {/*<FormField*/}
                {/*  //@ts-ignore*/}
                {/*  inputType={"file"}*/}
                {/*  labelName={*/}
                {/*    "Upload your latest certified financial statements: (if applicable)"*/}
                {/*  }*/}
                {/*  placeholder={""}*/}
                {/*  error={*/}
                {/*    errors.financialStatements*/}
                {/*      ? errors.financialStatements.message*/}
                {/*      : undefined*/}
                {/*  }*/}
                {/*  {...register("financialStatements", {*/}
                {/*    validate: (file: File | undefined) => {*/}
                {/*      if (file && file.type !== "application/pdf") {*/}
                {/*        return "Only PDF files are allowed.";*/}
                {/*      }*/}
                {/*      if (file && file.size > 10 * 1024 * 1024) {*/}
                {/*        return "File must be under 10MB.";*/}
                {/*      }*/}
                {/*      return true;*/}
                {/*    },*/}
                {/*  })}*/}
                {/*/>*/}
              </div>
              <label className="form-control w-max flex-1 flex flex-col">
                <div className="label">
                  <span className={"label-text"}>
                    Upload a video of your product *
                  </span>
                </div>
                <UploadWidget
                  onUploadSuccess={handleUploadDemoSuccess}
                  property={"demo"}
                />
              </label>
              {demoUrl && (
                <div>
                  <video controls width="600" src={demoUrl}></video>
                </div>
              )}
            </div>
            <div role="alert" className="alert bg-primary rounded">
              <Image src={moneyBag} width={40} alt="Money bag" />
              <span className={"text-black font-bold text-lg"}>
                You will get the raised amount minus 2-3% of operational fees!
              </span>
            </div>
            <div className={"flex flex-col mt-2 gap-2"}>
              <h2>Financing</h2>
              <div className={"w-full flex flex-wrap gap-8"}>
                <FormField
                  //@ts-ignore
                  inputType={"number"}
                  labelName={"How much money are you looking to raise?*"}
                  placeholder={"Value in USDT"}
                  error={
                    errors.targetedAmount
                      ? errors.targetedAmount.message
                      : undefined
                  }
                  {...register("targetedAmount", {
                    required: "This field is required",
                  })}
                />

                <FormField
                  //@ts-ignore
                  isSelect={true}
                  labelName={"In what form do you want to raise funds? *"}
                  options={["Bond", "Equity"].map((type, index) => ({
                    key: index,
                    value: type,
                    text: type,
                  }))}
                  error={errors.nftType ? errors.nftType.message : undefined}
                  {...register("nftType", {
                    required: "This field is required",
                  })}
                />
                {raiseThroughBonds && (
                  <div className={"w-full flex flex-wrap gap-8"}>
                    <FormField
                      //@ts-ignore
                      inputType={"number"}
                      labelName={"Bond annual interest rate:*"}
                      placeholder={"Value in percentage"}
                    />
                    <FormField
                      //@ts-ignore
                      inputType={"number"}
                      labelName={"Bond's term to maturity':*"}
                      placeholder={"Years"}
                    />
                  </div>
                )}
                <label className="form-control w-max flex-1 flex flex-col">
                  <div className="label">
                    <span className={"label-text"}>
                      Upload your business Plan *
                    </span>
                  </div>
                  <UploadWidget
                    onUploadSuccess={handleUploadDemoSuccess}
                    property={"businessPlan"}
                    resourceType={"raw"}
                  />
                </label>
                {businessPlanUrl && (
                  <iframe
                    src={businessPlanUrl}
                    title="PDF Preview"
                    className="w-full h-96 border-2"
                  />
                )}
                <FormField
                  //@ts-ignore
                  inputType={"number"}
                  labelName={"Unit price of the Equity or Bond:*"}
                  placeholder={"Value in USDT"}
                  error={
                    errors.nftUnitPrice
                      ? errors.nftUnitPrice.message
                      : undefined
                  }
                  {...register("nftUnitPrice", {
                    required: "This field is required",
                  })}
                />
                <FormField
                  //@ts-ignore
                  inputType={"text"}
                  labelName={
                    "Name or Initials you want to give to your token: *"
                  }
                  placeholder={"TAL"}
                  error={
                    errors.NFTInitials ? errors.NFTInitials.message : undefined
                  }
                  {...register("NFTInitials", {
                    required: "This field is required",
                  })}
                />
              </div>
              <FormField
                //@ts-ignore
                labelName={"Intended use of the raised funds *"}
                placeholder={
                  "An hospital that uses mean test to charge the fees"
                }
                isTextArea={true}
                error={
                  errors.projectNeed ? errors.projectNeed.message : undefined
                }
                {...register("projectNeed", {
                  required: "This field is required",
                })}
              />
            </div>
            <FormField
              //@ts-ignore
              inputType={"text"}
              labelName={"Sign with your full name *"}
              placeholder={"John Doe"}
              error={errors.signature ? errors.signature.message : undefined}
              {...register("signature", {
                required: "This field is required",
              })}
            />
            <FormField
              //@ts-ignore
              inputType={"date"}
              labelName={"Your campaign end date *"}
              placeholder={"End Date"}
              error={
                errors.campaignDeadline
                  ? errors.campaignDeadline.message
                  : undefined
              }
              {...register("campaignDeadline", {
                required: "This field is required",
              })}
            />

            <div className={"w-full flex flex-wrap gap-8"}>
              <SocialNetwork
                onSocialNetworksUpdate={handleSocialNetworksUpdate}
                name={"Website"}
              />

              <SocialNetwork
                onSocialNetworksUpdate={handleSocialNetworksUpdate}
                name={"LinkedIn"}
              />

              <SocialNetwork
                onSocialNetworksUpdate={handleSocialNetworksUpdate}
                name={"Facebook"}
              />
            </div>
            <div
              role="alert"
              className="alert bg-black  flex flex-row gap-4 rounded mt-2"
            >
              <div className={"text-primary justify-start items-start"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className={"flex flex-col w-full items-center gap-2"}>
                <h2 className={"text-lg w-full text-primary font-medium"}>
                  Important Notice
                </h2>
                <p className={"text-sm text-white"}>
                  Raise Africa helps share your campaign with our network but
                  cannot guarantee full funding. Success depends on your
                  promotion and community engagement. Actively market your
                  campaign and mobilize supporters to boost your chances.
                </p>
              </div>
            </div>
            <div className={"w-full flex flex-row justify-between"}>
              <button
                type="button"
                className={
                  "btn w-5/12 sm:btn-md btn-outline btn-primary mr-3 font-medium"
                }
                onClick={onSave}
              >
                Save
              </button>
              <input
                className={"btn w-5/12 btn-primary rounded"}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
      <AlertModal
        isOpen={isAlertOpen}
        message="You will not be able to edit the submitted campaign. Are you sure you want to proceed?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};
export default CreateCampaignPage;
