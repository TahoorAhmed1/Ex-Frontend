import React from "react";
import Image from "next/image";
import { loginDonate } from "@/assets/index";
import { logo } from "@/assets";

function FormImg({ title }) {
  return (
    <div className="flex justify-center items-center  text-center bg-[url('../assets/Image/loginDonate.png')] bg-no-repeat w-full bg-cover lg:h-[700px] h-[520px] bg-center    rounded-3xl">
      <div className="">
        <h2 className="text-[#fff] md:text-5xl  sm:text-4xl text-3xl font-semibold">
          {title}
        </h2>
        <hr className=" w-[15rem] sm:mt-10 mt-2 m-auto border-b-2 " />
        <Image
          src={logo}
          alt={title}
          width={1000}
          height={1000}
          className="w-[180px]  mt-16 m-auto object-cover"
        />
      </div>
    </div>
  );
}

export default FormImg;
