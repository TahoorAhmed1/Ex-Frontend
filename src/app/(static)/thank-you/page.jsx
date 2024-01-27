/** @format */

"use client";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { FaRegCheckCircle } from "react-icons/fa";
import React from "react";
export default function page() {
  const router = useRouter();
  const onOk = () => {
    const token = getCookies("token");
    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/");
    }
  };
  return (
    <div className="flex justify-center items-center h-[60vh] ">
      <div className="flex flex-col gap-6 bg-black/60 justify-center items-center rounded-lg overflow-hidden p-6 lg:p-9 w-[80vw] sm:w-[40vw]">
        <FaRegCheckCircle size={50} className="text-green-700" />
        <h3 className="capitalize text-white text-xl sm:text-3xl">
          Thank You.
        </h3>
        <button
          className="py-1 px-6 text-base xl:text-xl rounded-md bg-green-700 cursor-pointer hover:bg-green-900"
          onClick={onOk}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
