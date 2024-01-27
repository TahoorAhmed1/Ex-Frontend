/** @format */

"use client";
import { API } from "@/api";
import { Editor } from "primereact/editor";
import Button from "@/components/general/Button";
import Heading from "@/components/general/Heading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page({ params: { slug } }) {
  const [event, setEvent] = useState({});
  const getEvent = async () => {
    try {
      const res = await API.getEventById(slug);
      setEvent(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="flex flex-col container justify-center md:my-32 my-24">
      <div className="text-center space-y-1 mb-[30px]">
        <Heading heading={event?.title} />
        {event?.time && (
          <p className="text-primaryBrown font-semibold md:text-[16px] text-[13px]">
            {/* {event?.time?.split("T")[0]} --{" "}
            {event?.time?.split("T")[1].slice(0, 8)} */}

            {new Date(event?.time).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        )}
      </div>
      <div className="space-y-8">
        {event?.picture && (
          <Image
            src={event?.picture}
            alt="abc"
            width={1000}
            height={1000}
            // className="w-full sm:h-full h-[60vh] object-cover rounded-xl"
            className="w-full sm:h-full h-[55vw] rounded-xl"
          />
        )}
        <Editor
          readOnly
          id={event?.id}
          value={event?.description}
          headerTemplate={<></>}
          style={{ height: "auto", maxWidth: "100%" }}
        />
      </div>
      <Link href={"/ways-to-donate"} className="flex justify-center mt-8">
        <Button name={"Donate Now"} />
      </Link>
    </div>
  );
}

export default page;
