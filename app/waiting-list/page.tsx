"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "../components/FormField";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../components/Modal";
import SocialNetwork from "../components/SocialNetwork";
import { startupCategories } from "../constants";
import { useStateContext } from "../context";

type Inputs = {
  companyName: string;
  industry: string;
  country: string;
  contactFirstName: string;
  contactLastName: string;
  contactPosition: string;
  contactEmail: string;
  contactPhone: string;
  website: string;
  businessDescription: string;
  fundraisingGoal: number;
  useOfFunds: string;
  familiarWithBlockchain: string;
  additionalInfo: string;
};

const WaitingListPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [socialNetworks, setSocialNetworks] = useState([] as SocialNetwork[]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { addToWaitingList } = useStateContext();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const africanCountries = data
          .filter((country: any) => country.region === "Africa")
          .map((country: any) => country.name.common)
          .sort();
        setCountries(africanCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const submitData = async (formData: Inputs) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/projects/waiting-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setModalMessage(result.message); // Set success message from response
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error("Error submitting data:", error);
      setModalMessage("Failed to submit data. Please try again."); // Set error message
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const business = {
      ...formData,
      ...socialNetworks,
    };
    console.log(business);
    setIsLoading(true);
    try {
      await addToWaitingList(business);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    // router.push("/thank-you"); // Optionally navigate after closing
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

  const CountriesOptions: { key: number; value: string; text: string }[] = [];
  countries.forEach((country) => {
    const option = {
      key: CountriesOptions.length,
      value: country.toLowerCase(),
      text: country,
    };
    CountriesOptions.push(option);
  });

  return (
    <section className={"flex flex-col gap-4 px-5 py-5 w-full "}>
      <div className="w-full max-[806px]:max-w-[458px] max-w-screen-md xl:max-w-screen-lg pt-5 mx-auto sm:py-5">
        <div
          className={
            "rounded bg-[#222221] flex justify-center items-center flex-col sm:p-10"
          }
        >
          <div
            className={
              "flex flex-col gap-2 justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]"
            }
          >
            <h4 className={"text-white text-sm"}>
              Opening Date for Campaigns: December 1st
            </h4>
            <h1 className={"sm:text-xl text-primary font-medium"}>
              Get Ready to Launch Your Fundraising Campaign with Raise Africa
            </h1>
          </div>
          <p className={"text-white p-4"}>
            Raise Africa’s crowdfunding platform is launching soon, and we’re
            excited to connect impactful African businesses with investors
            worldwide. Be among the first to launch your fundraising campaign by
            joining our waitlist today!
          </p>
          <form
            className={"w-full lg:w-10/12 flex flex-col mt-8 gap-6"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"text"}
                labelName={"Company Name *"}
                placeholder={"Enter your company name"}
                error={
                  errors.companyName ? errors.companyName.message : undefined
                }
                {...register("companyName", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"text"}
                labelName={"Industry/Sector *"}
                placeholder={"e.g., healthcare, technology"}
                error={errors.industry ? errors.industry.message : undefined}
                {...register("industry", {
                  required: "This field is required",
                })}
              />
            </div>
            <FormField
              isSelect={true}
              labelName={"Country of Operation *"}
              options={CountriesOptions}
              error={errors.country ? errors.country.message : undefined}
              {...register("country", {
                required: "This field is required",
              })}
            />
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"text"}
                labelName={"Contact First Name *"}
                placeholder={"Enter first name"}
                error={
                  errors.contactFirstName
                    ? errors.contactFirstName.message
                    : undefined
                }
                {...register("contactFirstName", {
                  required: "This field is required",
                })}
              />

              <FormField
                inputType={"text"}
                labelName={"Contact Last Name *"}
                placeholder={"Enter last name"}
                error={
                  errors.contactLastName
                    ? errors.contactLastName.message
                    : undefined
                }
                {...register("contactLastName", {
                  required: "This field is required",
                })}
              />

              <FormField
                inputType={"text"}
                labelName={"Contact Position *"}
                placeholder={"Enter your position"}
                error={
                  errors.contactPosition
                    ? errors.contactPosition.message
                    : undefined
                }
                {...register("contactPosition", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"email"}
                labelName={"Contact Email *"}
                placeholder={"Enter your email"}
                error={
                  errors.contactEmail ? errors.contactEmail.message : undefined
                }
                {...register("contactEmail", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"tel"}
                labelName={"Contact Phone Number *"}
                placeholder={"Enter your phone number"}
                error={
                  errors.contactPhone ? errors.contactPhone.message : undefined
                }
                {...register("contactPhone", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className={"w-full my-6 flex flex-wrap gap-8"}>
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
            <FormField
              isTextArea={true}
              labelName={"Brief Description of Your Business *"}
              placeholder={"Enter a brief description"}
              error={
                errors.businessDescription
                  ? errors.businessDescription.message
                  : undefined
              }
              {...register("businessDescription", {
                required: "This field is required",
              })}
            />
            <div className={"w-full flex flex-wrap gap-8"}>
              <FormField
                inputType={"number"}
                labelName={"Fundraising Goal *"}
                placeholder={"Amount and currency"}
                error={
                  errors.fundraisingGoal
                    ? errors.fundraisingGoal.message
                    : undefined
                }
                {...register("fundraisingGoal", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"text"}
                labelName={"Planned Use of Funds *"}
                placeholder={"e.g., expansion, research, operations"}
                error={
                  errors.useOfFunds ? errors.useOfFunds.message : undefined
                }
                {...register("useOfFunds", {
                  required: "This field is required",
                })}
              />
              <FormField
                inputType={"text"}
                labelName={"Are You Familiar with Blockchain Technology? *"}
                placeholder={"Yes/No"}
                error={
                  errors.familiarWithBlockchain
                    ? errors.familiarWithBlockchain.message
                    : undefined
                }
                {...register("familiarWithBlockchain", {
                  required: "This field is required",
                })}
              />
            </div>
            <FormField
              isTextArea={true}
              labelName={"Additional Information or Questions"}
              placeholder={"Enter any additional info or questions"}
              error={
                errors.additionalInfo
                  ? errors.additionalInfo.message
                  : undefined
              }
              {...register("additionalInfo")}
            />
            <div className="w-full max-w-screen-md p-4 mt-4 rounded-lg shadow-lg">
              <h2 className="text-lg text-white font-semibold mb-2">
                Why Join the Raise Africa Wait list?
              </h2>
              <ul className="list-disc list-inside text-white mb-4">
                <li>
                  Early access to start your campaign as soon as the platform
                  launches.
                </li>
                <li>
                  Guidance and resources to help structure your campaign for
                  maximum success.
                </li>
                <li>
                  Regular updates on platform developments and fundraising tips.
                </li>
              </ul>
              <p className="text-white">
                Note: All information provided will be kept confidential and
                used only to facilitate your onboarding when our platform opens.
              </p>
            </div>
            <input className={"btn btn-primary rounded"} type="submit" />
          </form>
        </div>
      </div>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}{" "}
      {/* Render modal conditionally */}
    </section>
  );
};

export default WaitingListPage;
