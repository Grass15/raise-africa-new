import FormField from "./FormField";
import Link from "next/link";
import Image from "next/image";
import plusIcon from "../../public/images/plus.png";
import { useState } from "react";
import moneyBag from "../../public/images/money-bag.png";
import { SubmitHandler, useForm } from "react-hook-form";
//@ts-ignore
const Stakeholders = ({ onStakeholdersUpdate, founders }) => {
  const [stakeholders, setStakeHolders] = useState<Founder[]>(founders);

  const [stakeholder, setCurrentStakeholder] = useState<Founder>({} as Founder);

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Founder>();

  const onSubmit = () => {
    const founder = getValues();
    console.log(founder);
    setStakeHolders([...stakeholders, founder]);
    onStakeholdersUpdate(founder);
  };
  //@ts-ignore
  const handleFieldChange = (fieldName: string, e) => {
    setCurrentStakeholder({ ...stakeholder, [fieldName]: e.target.value });
  };
  return (
    <div>
      <div
        className={
          "w-full flex flex-wrap mt-2 gap-4 outline outline-primary outline-1 text-black p-6 rounded indicator"
        }
      >
        <FormField
          //@ts-ignore
          // handleChange={(e) => handleFieldChange("firstName", e)}
          inputType={"text"}
          labelName={"First Name *"}
          placeholder={"Alice"}
          error={errors.firstName ? errors.firstName.message : undefined}
          {...register("firstName", {
            required: "This field is required",
          })}
        />
        <FormField
          //@ts-ignore
          inputType={"text"}
          labelName={"Last Name *"}
          placeholder={"Miller"}
          // handleChange={(e: any) => handleFieldChange("lastName", e)}
          error={errors.lastName ? errors.lastName.message : undefined}
          {...register("lastName", {
            required: "This field is required",
          })}
        />
        <FormField
          //@ts-ignore
          // handleChange={(e) => handleFieldChange("role", e)}
          inputType={"text"}
          labelName={"Role *"}
          placeholder={"CEO"}
          error={errors.role ? errors.role.message : undefined}
          {...register("role", {
            required: "This field is required",
          })}
        />
        <FormField
          //@ts-ignore
          // handleChange={(e) => handleFieldChange("linkedIn", e)}
          inputType={"url"}
          labelName={"LinkedIn *"}
          placeholder={""}
          error={errors.linkedIn ? errors.linkedIn.message : undefined}
          {...register("linkedIn", {
            required: "This field is required",
          })}
        />
        {/*<FormField*/}
        {/*  //@ts-ignore*/}
        {/*  // handleChange={(e) => handleFieldChange("introVideo", e)}*/}
        {/*  inputType={"file"}*/}
        {/*  labelName={"Intro Video *"}*/}
        {/*  error={errors.introVideo ? errors.introVideo.message : undefined}*/}
        {/*  {...register("introVideo", {*/}
        {/*    validate: (file: File | null) => {*/}
        {/*      if (!file) return "A file is required.";*/}
        {/*      const validVideoTypes = ["video/mp4", "video/mpeg", "video/avi"];*/}
        {/*      if (!validVideoTypes.includes(file.type)) {*/}
        {/*        return "Only video files are allowed.";*/}
        {/*      }*/}
        {/*      if (file.size > 100 * 1024 * 1024) {*/}
        {/*        return "File must be under 100MB.";*/}
        {/*      }*/}
        {/*      return true;*/}
        {/*    },*/}
        {/*  })}*/}
        {/*/>*/}

        <div
          onClick={onSubmit}
          className="indicator-item indicator-start badge badge-black rounded-full p-2 justify-center items-center w-12 h-12 cursor-pointer"
        >
          <Image src={plusIcon} width={20} alt="Plus Icon" />
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;
