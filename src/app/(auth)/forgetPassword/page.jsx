"use client";
import React, { useState } from "react";
import FormImg from "@/components/auth/FormImg";
import Button from "@/components/general/Button";
import Link from "next/link";
import Input from "@/components/general/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "@/validation";
import { notify } from "@/utils/notify";
import { API } from "@/api";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

function page() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.forget),
  });

  const submitForm = async (data) => {
    try {
      setLoader(true);
      const res = await API.forgetPassword(data);
      // console.log(res)
      if (res) {
        notify("success", res?.data?.message);
        setCookie("otpToken", res?.data?.data?.token); //setting token just for resetting
        reset();
        router.push("/verify");
      }
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      notify("error", message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center py-10 min-h-screen bg-white">
      <div className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-8">
        <div className="flex flex-col justify-center lg:order-first order-last">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-3"
          >
            <Input
              name={"email"}
              placeholder={"Email Address"}
              type={"text"}
              register={register}
              errors={{ email: errors?.email?.message }}
            />
            <Button name={"Forget"} className="w-full" loader={loader} />
          </form>

          <p className="text-[#B6B6B6] mt-5  font-semibold text-sm  text-right">
            <Link href={"/login"}>Sign In?</Link>
          </p>
        </div>
        <FormImg title={"Forget Password"} />
      </div>
    </div>
  );
}

export default page;
