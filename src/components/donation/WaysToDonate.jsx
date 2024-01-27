"use client";
import React from "react";
import Heading from "../general/Heading";
import Image from "next/image";
import Link from "next/link";

export default function WaysToDonate({ data }) {
  return (
    <div className="container ">
      <div className="text-center">
        {/* <Heading heading="Ways To Donate" /> */}
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          Ways To Donate
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 mt-6 place-content-center">
        {data.map((items, index) => {
          return (
            <div
              className="relative group rounded-xl overflow-hidden w-full lg:max-w-[600px] h-[400px] loading-square loading-square-right"
              key={index}
            >
              <div className="absolute z-10 top-0 h-full w-full bg-gradient-to-r from-[#BC5F2E] to-black/70"></div>
              <Image
                src={items.bgImg}
                alt="donationImage"
                height={1000}
                width={1000}
                className="w-full h-full group-hover:scale-110 transition object-cover"
              />
              <div className="absolute z-20 top-0 text-white w-full text-center bg_gradient_brown py-4">
                {items.heading}
              </div>
              <div className="absolute z-20 flex justify-center bottom-10 w-full">
                <Link
                  href={items.href}
                  className=" bg-[#f57834]/50 hover:bg-[#f57834] transition  max-w-fit mx-auto px-6 py-3 text-white rounded-lg border-white border-2 cursor-pointer sm:text-base text-lg "
                >
                  {items.btnText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div
className=" relative w-full rounded-xl justify-center border-2 border-green-600 h-[500px] "
key={index}
>
<div className="text-white w-full text-center bg-[#BC5F2E] py-4 rounded-t-xl border border-blue-600 ">
  {items.heading}
</div>
<div className="absolute top-0 h-full w-full bg-gradient-to-r from-[#BC5F2E] to-black/70 rounded-b-xl border-2 border-purple-700"></div>
<Image
  src={items.bgImg}
  alt="donationImage"
  height={1000}
  width={1000}
  className="w-full h-full rounded-b-xl object-contain"
/>
<Link
  href={items.href}
  className="bg-[#BC5F2E]/50 sm:px-24 right-0 left-0 max-w-fit mx-auto px-[50px] py-3  absolute text-white rounded-lg bottom-1  border-white border-2 sm:text-base text-xs "
>
  {items.btnText}
</Link>
</div> */
}
