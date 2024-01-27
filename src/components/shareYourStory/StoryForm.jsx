"use client";
import { API } from "@/api";
import Button from "@/components/general/Button";
import Heading from "@/components/general/Heading";
import Input from "@/components/general/Input";
import TextArea from "@/components/general/TextArea";
import { notify } from "@/utils/notify";
import { Schema } from "@/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
function StoryForm() {
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.storyValidation),
  });

  const SubmitForm = async (data) => {
    try {
      setLoader(true);
      const res = await API.createStory(data);
      if (res) {
        notify("success", res?.data?.message);
        reset();
      }
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      notify("error", message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="lg:w-[50%] w-full">
      {/* <Heading heading={"Share Your Story"} /> */}
      <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
        Share Your Story
      </h2>
      <form
        onSubmit={handleSubmit(SubmitForm)}
        className="grid grid-cols-1 sm:gap-4 gap-3 mt-4"
      >
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3 ">
          <Input
            name={"name"}
            placeholder={"Your Name"}
            register={register}
            type={"text"}
            errors={{ name: errors?.name?.message }}
          />
          <Input
            name={"email"}
            placeholder={"Email"}
            register={register}
            type={"text"}
            errors={{ email: errors?.email?.message }}
          />
        </div>
        <TextArea
          name={"description"}
          placeholder={"Your Story"}
          register={register}
          type={"text"}
          errors={{ description: errors?.description?.message }}
        />
        <Button name={"Submit"} className={"w-full "} loader={loader} />
      </form>
    </div>
  );
}

export default StoryForm;
