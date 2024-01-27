/** @format */

"use client";
import { Photo4, contactus } from "@/assets";
import Image from "next/image";
import React from "react";
import ContactForm from "../general/ContactForm";
import Heading from "../general/Heading";
function ContactUs() {
  return (
    <div className="md:my-32 grid grid-cols-1 gap-10 my-24 lg:grid-cols-2 ">
      <div className="w-full h-full rounded-3xl overflow-hidden">
        <Image
          src={Photo4}
          alt="contactus"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center ">
        <div className="text-center mb-2">
          <Heading heading={"Contact Us"} className={"flex justify-start "} />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
