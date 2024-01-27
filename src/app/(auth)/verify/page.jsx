/** @format */

"use client";
import React, { useState } from "react";
import FormImg from "@/components/auth/FormImg";
import Button from "@/components/general/Button";
import Link from "next/link";
import Input from "@/components/general/Input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "@/validation";
import { notify } from "@/utils/notify";
import { API } from "@/api";
import { deleteCookie, setCookie } from "cookies-next";

function page() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.verify),
  });

  const submitForm = async (data) => {
    try {
      setLoader(true);
      const res = await API.verifyOtp(data);
      if (res) {
        if (res?.data?.message == "Email has been verified") {
          notify("success", res?.data?.message);
          reset();
          deleteCookie("otpToken");
          setTimeout(() => {
            router.push("/login");
          }, 1000);
        } else {
          notify("success", res?.data?.message);
          setCookie("resetToken", res?.data?.data?.token); //setting token just for resetting
          reset();
          deleteCookie("otpToken");
          setTimeout(() => {
            router.push("/reset");
          }, 1000);
        }
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
              name={"otp"}
              placeholder={"OTP"}
              type={"text"}
              register={register}
              errors={{ otp: errors?.otp?.message }}
            />
            <Button name={"Verify"} className="w-full" loader={loader} />
          </form>

          <p className="text-[#B6B6B6] mt-5  font-semibold text-sm  text-right">
            <Link href={"/login"}>Sign In?</Link>
          </p>
        </div>
        <FormImg title={"Verify OTP"} />
      </div>
    </div>
  );
}

export default page;
