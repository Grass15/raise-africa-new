"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "../../components/FormField";
import { useStateContext } from "../../context";
import Stakeholders from "../../components/Stakeholders";
import Image from "next/image";
import moneyBag from "../../../public/images/money-bag.png";
import { useRouter } from "next/navigation";
import { propositionCategories, startupCategories } from "../../constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Inputs = {
  category: string;
  description: string;
};
const CreatePropositionPage = () => {
  const router = useRouter();
  const { account, createProposition, getPropositionTypes } = useStateContext();
  const [propositionTypes, setPropositionTypes] = useState<PropositionType[]>(
    [],
  );
  const [propositionTitle, setPropositionTitle] = useState<string>("");
  const [propositionType, setPropositionType] = useState<PropositionType>();
  const [propositionDescription, setPropositionDescription] =
    useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    (async () => {
      try {
        const types = await getPropositionTypes();
        setPropositionTypes(types);
        setPropositionType(types[0]);

        console.log(types);
      } catch (err) {
        console.log("Error occured when fetching ");
      }
    })();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    console.log(propositionDescription);
    const proposition: Proposition = {
      id: "",
      creator: account?.address || "",
      deadline: 0,
      description: propositionDescription,
      percentage: 0,
      title: (propositionType?.name == "Other"
        ? propositionTitle
        : propositionType?.name) as string,
      type: propositionType?._id as string,
      status: "",
      voters: [],
    };
    try {
      await createProposition(proposition);

      //router.push("/propositions");
    } catch (e) {
      console.log(e);
    }
  };

  const updateCategory = (type: PropositionType) => {
    setPropositionType(type);
  };

  // const categoryOptions: { value: string; text: string }[] = [];
  // propositionCategories.forEach((category) => {
  //   const option = {
  //     value: category,
  //     text: category,
  //   };
  //   categoryOptions.push(option);
  // });
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
              Make a Proposition
            </h1>
          </div>
          <form
            className={"w-full lg:w-10/12 flex flex-col mt-16 gap-10"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div role="tablist" className="tabs tabs-bordered">
              {propositionTypes.map((proposition, index) => (
                <>
                  {index == 0 ? (
                    <input
                      key={index}
                      type="radio"
                      role="tab"
                      className="tab font-semibold"
                      aria-label={proposition.name}
                      value={proposition.name}
                      defaultChecked={true}
                      onClick={() => updateCategory(proposition)}
                      {...register("category", {
                        required: "This field is required",
                      })}
                    />
                  ) : (
                    <input
                      key={index}
                      type="radio"
                      role="tab"
                      className="tab font-semibold"
                      aria-label={proposition.name}
                      value={proposition.name}
                      onClick={() => updateCategory(proposition)}
                      {...register("category", {
                        required: "This field is required",
                      })}
                    />
                  )}

                  <div role="tabpanel" className="tab-content text-primary p-4">
                    {proposition.name == "Other" && (
                      <FormField
                        inputType={"text"}
                        labelName={"Title *"}
                        placeholder={"A descriptive title"}
                        handleChange={(e) => {
                          setPropositionTitle(e.target.value);
                        }}
                      />
                    )}
                    <div className={"py-2"} />
                    <FormField
                      labelName={"Description *"}
                      placeholder={"A simple description of your proposition"}
                      isTextArea={true}
                      handleChange={(e) => {
                        setPropositionDescription(e.target.value);
                      }}
                    />
                  </div>
                </>
              ))}
            </div>
            <input className={"btn btn-primary rounded"} type="submit" />
          </form>
        </div>
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default CreatePropositionPage;
