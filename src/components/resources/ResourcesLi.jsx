import { bulltePointer } from "@/assets";
import Image from "next/image";
import React from "react";

export default function ResourcesLi({ title, href, type }) {
  return (
    <>
      <div className=" flex flex-col gap-6 lg:flex-row justify-between lg:items-center pt-8 pb-4">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src={bulltePointer}
            alt="pointer"
            width={1000}
            height={1000}
            className="w-4 h-4"
          />
          <a
            href={href}
            target="_blank"
            className="capitalize cursor-pointer hover:text-primaryBrown"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        {type === 'media' ?
      <></>
      :  
        <a
          href={href}
          target="_blank"
          className="uppercase text-primaryBrown border border-primaryBrown rounded lg:text-lg cursor-pointer px-5 py-1 max-w-fit pr- hover:bg-primaryBrown hover:text-white"
        >
          PDF
        </a>
      }
      </div>
      <hr className="bg-primaryBrown h-1" />
    </>
  );
}
