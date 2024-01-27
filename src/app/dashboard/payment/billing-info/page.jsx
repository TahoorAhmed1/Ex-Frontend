/** @format */

import { box_img } from "@/assets";
import BillingForm from "@/components/donation/BillingForm";
import Form from "@/components/donation/UserForm";
import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <div className="relative">
      <div className="absolute max-w-[210px] max-h-[180px] hidden lg:block -top-9 right-0 bg-cover bg-no-repeat bg-center bg_profile_design"></div>

      <div className="dashboard_container flex flex-wrap lg:flex-nowrap gap-4 gap-y-16 justify-between lg:items-end items-center py-10 w-full">
        <form className="flex max-w-[700px] flex-col gap-10 w-full">
          <Form update={true} />
          <BillingForm update={true} />
          <Button
            newClass={
              " w-full text-green-text font-medium text-lg border border-green-border py-2.5 shadow_2xl px-8 rounded-md hover:bg-green-background cursor-pointer hover:text-white"
            }
            name={"Update"}
          />
        </form>
        <div className="max-w-[300px]">
          <Image alt="box-img" src={box_img} />
        </div>
      </div>
    </div>
  );
};

export default page;
