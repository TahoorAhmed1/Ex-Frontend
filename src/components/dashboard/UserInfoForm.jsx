"use client";
import React, { useState } from "react";
import Input from "../general/Input";
import Button from "../general/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "@/validation";
import { useForm } from "react-hook-form";
import { API } from "@/api";
import { notify } from "@/utils/notify";

const UserInfoForm = ({ user, getUser }) => {
  const [update, setUpdate] = useState(true);
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.update),
  });
  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const res = await API.updateUser(data);
      notify("success", res?.data?.message);
      reset();
      getUser();
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
            onchange={() => setUpdate(!update)}
          />
          <p className="text-[#B6B6B6]">Check to update</p>
        </div>
        <Input
          name={"firstName"}
          placeholder={user?.firstName}
          disabled={update}
          type={"text"}
          register={register}
          errors={{ firstName: errors?.firstName?.message }}
        />
        <Input
          name={"lastName"}
          placeholder={user?.lastName}
          disabled={update}
          type={"text"}
          register={register}
          errors={{ lastName: errors?.lastName?.message }}
        />
        <Input
          name={"email"}
          placeholder={user?.email}
          disabled={true}
          type={"email"}
          register={() => {}}
          errors={{ email: errors?.email?.message }}
        />
        <Button
          newClass={` w-full mt-2 text-green-text flex justify-center items-center gap-3 font-medium lg:text-lg text-base border border-green-border py-2.5 shadow_2xl lg:px-8 px-4  rounded-md hover:${
            !update && "bg-green-background cursor-pointer"
          }  transition hover:${!update && "text-white"}`}
          loader={loader}
          disabled={update}
          name={"Update"}
        />
      </form>
    </div>
  );
};

export default UserInfoForm;
