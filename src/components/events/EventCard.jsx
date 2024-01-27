/** @format */

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Editor } from "primereact/editor";

export const EventCard = ({ item, index }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = new Date(item?.time);
  return (
    <Link href={`/events/${item?.id}`} className="mt-12 ">
      <div className="flex gap-4 justify-center items-center">
        {/* <p className="font-bold">{item?.mmyy}</p> */}
        <hr className="border flex-1 border-[#BC5F2E]" />
      </div>
      <div className="flex lg:flex-row flex-col gap-4 mt-6">
        <div className="flex lg:flex-col lg:gap-1 gap-2 flex-row items-center">
          <span className="text-[16px]">
            <div className="flex flex-col text-center">
              <span>
                {new Date(item?.time).toLocaleString("en-US", {
                  weekday: "long",
                })}
              </span>
              <span className="text-2xl font-bold text-[#BC5F2E]">
                {new Date(item?.time).toLocaleString("en-US", {
                  day: "numeric",
                })}
              </span>
            </div>
          </span>
          {/* <span className="font-bold  text-[16px] lg:text-[20px] text-[#BC5F2E]">
            {item?.time?.split("T")[0].slice(-2)}
          </span> */}
        </div>
        <div className="w-full sm:w-[50%]">
          {/* <p className="text-[#BC5F2E] md:text-[15px] text-[12px]">
            {new Date(item?.time).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p> */}
          <p className="md:font-bold break-all text-wrap  font-semibold md:text-2xl text-xl ">
            {item?.title}
          </p>
          <p className="md:font-bold break-all text-wrap font-semibold md:text-lg text-base text-[#BC5F2E]">
            {item?.address}
          </p>
          <Editor
            readOnly
            id={item?.id}
            value={`${item?.description.slice(0, 650)}${
              item.description.length > 650 ? "..." : ""
            }`}
            headerTemplate={<></>}
            style={{ height: "auto", maxWidth: "100%" }}
          />
        </div>
        <div className="w-[50%] h-full">
          <Image
            src={item?.picture}
            alt="event"
            width={1000}
            height={1000}
            className=" w-full h-full rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};
