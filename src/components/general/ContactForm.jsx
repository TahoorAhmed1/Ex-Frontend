"use client";
import { Schema } from "@/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "@/components/general/Input";
import TextArea from "@/components/general/TextArea";
import Button from "../general/Button";
import { notify } from "@/utils/notify";
import { API } from "@/api";
import { useState } from "react";
function ContactForm() {
  const [loader,setLoader] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.contactValidation),
  });

  const SubmitForm = async(data) => {
    try {
      setLoader(true)
     const res = await API.contactUs(data);
     if(res){
      notify("success", res?.data?.message)
      reset()
     }
    } catch (error) {
      const message = error?.response?.data?.message || error?.message
      notify("error",message)
    }finally{
      setLoader(false)
    }
  };
  return (
   
      <form
        onSubmit={handleSubmit(SubmitForm)}
        className="grid grid-cols-1 sm:gap-4 gap-3 mt-4"
      >
        <Input
          name={"name"}
          placeholder={"Full Name"}
          register={register}
          type={"text"}
          errors={{ name: errors?.name?.message }}
        />
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3 ">
          <Input
            name={"email"}
            placeholder={"Email Address"}
            register={register}
            type={"text"}
            errors={{ email: errors?.email?.message }}
          />
          <Input
            name={"phone"}
            placeholder={"Phone Number"}
            register={register}
            type={"text"}
            errors={{ phone: errors?.phone?.message }}
          />
        </div>
        <TextArea
          name={"message"}
          placeholder={"Message"}
          register={register}
          type={"text"}
          errors={{ message: errors?.message?.message }}
        />
        <Button name={"Contact"} className={"w-full "} loader={loader}/>
      </form>

  );
}

export default ContactForm;
