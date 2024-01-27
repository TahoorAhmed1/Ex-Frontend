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
import { deleteCookie } from "cookies-next";

function page() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.reset),
  });

  const submitForm = async (data) => {
    if (data.confirmPassword !== data.password) {
      return notify("error", "Password must match");
    }
    try {
      setLoader(true);
      const res = await API.resetPassword({ password: data.password });
      console.log(res);
      if (res) {
        notify("success", res?.data?.message);
        reset();
        setTimeout(() => {
          deleteCookie("resetToken");
          router.push("/login");
        }, 1000);
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
      <div className="container grid lg:grid-cols-2 grid-cols-1  lg:gap-14 gap-8  ">
        <div className="flex flex-col justify-center lg:order-first order-last ">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col gap-3"
          >
            <Input
              name={"password"}
              placeholder={"Passwords"}
              type={"password"}
              register={register}
              errors={{ password: errors?.password?.message }}
            />

            <Input
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={"password"}
              register={register}
              errors={{ confirmPassword: errors?.confirmPassword?.message }}
            />
            <Button name={"Reset"} className="w-full" loader={loader} />
          </form>

          <p className="text-[#B6B6B6] mt-5  font-semibold text-sm  text-right">
            <Link href={"/login"}>Sign In?</Link>
          </p>
        </div>
        <FormImg title={"Reset Password"} />
      </div>
    </div>
  );
}

export default page;
