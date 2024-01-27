"use client";
import React, { useState } from "react";
import Input from "../general/Input";
import Button from "../general/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "@/validation";
import { useForm } from "react-hook-form";
import { API } from "@/api";
import { notify } from "@/utils/notify";

const ChangePassword = () => {
  const [change, setChange] = useState(true);
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.changePassword),
  });
  const onSubmit = async (data) => {
    delete data?.confirmPassword;
    try {
      setLoader(true);
      const res = await API.changePassword(data);
      notify("success", res?.data?.message);
      reset();
    } catch (error) {
      notify("error", error?.response?.data?.message || error?.message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-4">
      <form
        className=" border-2  lg:p-10 p-5 flex flex-col gap-3 shadow-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2">
          <Input
            type={"checkbox"}
            register={() => {}}
            className={"w-3"}
            onchange={() => setChange(!change)}
          />
          <p className="text-[#B6B6B6]">Check to change</p>
        </div>
        <Input
          name={"oldPassword"}
          placeholder={"Old Password"}
          disabled={change}
          type={"password"}
          register={register}
          errors={{ oldPassword: errors?.oldPassword?.message }}
        />
        <Input
          name={"newPassword"}
          placeholder={"New Password"}
          disabled={change}
          type={"password"}
          register={register}
          errors={{ newPassword: errors?.newPassword?.message }}
        />
        <Input
          name={"confirmPassword"}
          placeholder={"Confirm Password"}
          disabled={change}
          type={"password"}
          register={register}
          errors={{ confirmPassword: errors?.confirmPassword?.message }}
        />
        <Button
          newClass={` w-full mt-2 text-green-text flex justify-center items-center gap-3 font-medium lg:text-lg text-base  border border-green-border py-2.5 shadow_2xl lg:px-8 px-4 rounded-md hover:${
            !change && "bg-green-background cursor-pointer"
          }  transition hover:${!change && "text-white"}`}
          disabled={change}
          loader={loader}
          name={"Change Password"}
        />
      </form>
    </div>
  );
};

export default ChangePassword;
