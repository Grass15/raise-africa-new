"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { startupCategories } from "../../constants";
import FormField from "../../components/FormField";
import moneyBag from "../../../public/images/money-bag.png";
import Image from "next/image";
import Stakeholders from "../../components/Stakeholders";
import { encryptObject } from "../../utils";
import { useStateContext } from "../../context";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SocialNetwork from "../../components/SocialNetwork";
import { keccak256 } from "js-sha3";

type Inputs = {
  firstName: string;
  lastName: string;
  role: string;
  linkedIn: string;
  projectTitle: string;
  projectCategory: string;
  projectDescription: string;
  projectInnovation: string;
  projectNeed: string;
  sharesToFundPercentage: number;
  financialStatus: string;
  campaignTarget: number;
  campaignDeadline: Date;
  location: string;
  video: string;
  image: string;
};

const CreateCampaignPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [stakeholders, setStakeholders] = useState([] as Stakeholder[]);
  const [socialNetworks, setSocialNetworks] = useState([] as SocialNetwork[]);

  const handleStakeholdersUpdate = (stakeholder: Stakeholder) => {
    setStakeholders([...stakeholders, stakeholder]);
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

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onSubmit: SubmitHandler<Inputs> = async (campaignForm: Inputs) => {
    console.log(campaignForm);
    const creatorInfo: Stakeholder = {
      firstName: campaignForm.firstName,
      lastName: campaignForm.lastName,
      role: campaignForm.role,
      linkedIn: campaignForm.linkedIn,
    };
    stakeholders.push(creatorInfo);
    const project: Project = {
      title: campaignForm.projectTitle,
      description: campaignForm.projectDescription,
      need: campaignForm.projectNeed,
      category: campaignForm.projectCategory,
      innovation: campaignForm.projectInnovation,
      demo: campaignForm.video,
    };
    const startup: Startup = {
      stakeholders,
      project,
      financialStatus: campaignForm.financialStatus,
      sharesToFundPercentage: campaignForm.sharesToFundPercentage,
      location: campaignForm.location,
      socialNetwork: socialNetworks,
    };
    const encryptedStartupData = encryptObject(startup);
    const startupDataHashed = keccak256(encryptedStartupData);
    setIsLoading(true);
    try {
      await createCampaign(
        campaignForm.campaignTarget,
        new Date(campaignForm.campaignDeadline).getTime().toString(),
        campaignForm.image,
        startupDataHashed,
      );
      setIsLoading(false);
      router.push("/campaigns");
    } catch (error) {
      console.log(error);
    }
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
              "flex justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]"
            }
          >
            <h1 className={"sm:text-xl text-primary  font-medium"}>
              Start a Campaign
            </h1>
          </div>
          <form
            className={"w-full lg:w-10/12 flex flex-col mt-16 gap-10"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"text"}
                labelName={"First Name *"}
                placeholder={"John"}
                error={errors.firstName ? errors.firstName.message : undefined}
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"text"}
                labelName={"Last Name *"}
                placeholder={"Curtis"}
                error={errors.lastName ? errors.lastName.message : undefined}
                {...register("lastName", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"text"}
                labelName={"Your Role *"}
                placeholder={"CEO"}
                error={errors.role ? errors.role.message : undefined}
                {...register("role", { required: "This field is required" })}
              />
              <FormField
                inputType={"text"}
                labelName={"Your LinkedIn *"}
                placeholder={""}
                error={errors.linkedIn ? errors.linkedIn.message : undefined}
                {...register("linkedIn", {
                  required: "This field is required",
                })}
              />
            </div>

            <div>
              Other Stakeholders
              <Stakeholders onStakeholdersUpdate={handleStakeholdersUpdate} />
            </div>
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"text"}
                labelName={"Project Title *"}
                placeholder={"Coteus Hospital"}
                error={
                  errors.projectTitle ? errors.projectTitle.message : undefined
                }
                {...register("projectTitle", {
                  required: "This field is required",
                })}
              />
              <FormField
                isSelect={true}
                labelName={"Project Domain *"}
                // @ts-ignore
                options={CategoryOptions}
                error={
                  errors.projectCategory
                    ? errors.projectCategory.message
                    : undefined
                }
                {...register("projectCategory", {
                  required: "This field is required",
                })}
              />
            </div>
            <FormField
              labelName={"Project Description *"}
              placeholder={"An hospital that uses mean test to charge the fees"}
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

            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                labelName={"Project Innovation *"}
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
                labelName={"Project Need *"}
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
              inputType={"text"}
              labelName={"Financial Status *"}
              placeholder={"We are just beginning and have no funds"}
              error={
                errors.financialStatus
                  ? errors.financialStatus.message
                  : undefined
              }
              {...register("financialStatus", {
                required: "This field is required",
              })}
            />

            <div role="alert" className="alert bg-primary rounded">
              <Image src={moneyBag} width={40} alt="Money bag" />
              <span className={"text-black font-bold text-lg"}>
                You will get 100% of the raised amount!
              </span>
            </div>
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"number"}
                labelName={"Goal *"}
                placeholder={"Value in RAF"}
                error={
                  errors.campaignTarget
                    ? errors.campaignTarget.message
                    : undefined
                }
                {...register("campaignTarget", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"number"}
                labelName={"Total percentage of shares to be funded *"}
                placeholder={"Value in Percentage"}
                error={
                  errors.sharesToFundPercentage
                    ? errors.sharesToFundPercentage.message
                    : undefined
                }
                {...register("sharesToFundPercentage", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"date"}
                labelName={"End date *"}
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
            </div>
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"file"}
                labelName={"A descriptive image *"}
                placeholder={""}
                error={errors.image ? errors.image.message : undefined}
                {...register("image", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"file"}
                labelName={"A video to showcase of your project *"}
                placeholder={""}
                error={errors.video ? errors.video.message : undefined}
                {...register("video", {
                  required: "This field is required",
                })}
              />
            </div>
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
                name={"Telegram"}
              />
            </div>
            <input className={"btn btn-primary rounded"} type="submit" />
          </form>
        </div>
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};
export default CreateCampaignPage;
