"use client";
import FormField from "../../components/FormField";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useStateContext } from "../../context";
import { useEffect, useState } from "react";

type Inputs = {
  title: string;
  message: string;
};
const NewPostPage = () => {
  const router = useRouter();
  const [referenceId, setReferenceId] = useState("");
  useEffect(() => {
    const post = localStorage.getItem("propositionReferenceId");
    if (post) {
      setReferenceId(JSON.parse(post));
    }
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { account, createPost } = useStateContext();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const post: Post = {
      author: account.address,
      comments: [],
      creation: 0,
      id: "",
      message: data.message,
      reference_id: referenceId,
      tags: [],
      title: data.title,
    };
    try {
      await createPost(post);

      //router.push("/forum");
    } catch (e) {
      console.log(e);
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
              "flex justify-center items-center bg-secondary p-4 rounded sm:min-w-[380px]"
            }
          >
            <h1 className={"sm:text-xl text-primary  font-medium"}>New Post</h1>
          </div>
          <form
            className={"w-full lg:w-10/12 flex flex-col mt-16 gap-10"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              inputType={"text"}
              labelName={"Title *"}
              placeholder={"A descriptive title"}
              error={errors.title ? errors.title.message : undefined}
              {...register("title", {
                required: "This field is required",
              })}
            />
            <FormField
              labelName={"Message *"}
              placeholder={"Your message"}
              isTextArea={true}
              error={errors.message ? errors.message.message : undefined}
              {...register("message", {
                required: "This field is required",
              })}
            />
            <input className={"btn btn-primary rounded"} type="submit" />
          </form>
        </div>
      </div>

      {/*{isConnected ? <h1>Hello, Campaigns Page!</h1> : <Error403 />}*/}
    </section>
  );
};

export default NewPostPage;
