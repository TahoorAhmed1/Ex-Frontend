/** @format */

import Heading from "@/components/general/Heading";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "@/components/general/ContactForm";
import Image from "next/image";
import { contact_bg } from "@/assets";

export const metadata = {
  title: "Contact Us",
  description: "Expedition Orange | Contact Us",
};

function page() {
  return (
    <>
      <div className="container mt-24 mb-2 ">
        <div className="flex lg:flex-row flex-col justify-center xl:gap-24 gap-10">
          <div className="lg:w-[50%] w-full">
            {/* <Heading heading={"Contact Us"} /> */}
            <h2
              className={`sm:text-[35px] text-[24px] font-semibold text-black`}
            >
              Contact Us
            </h2>

            <div className="mt-4">
              <p>
              We look forward to hearing from you!
              </p>
              <div className="flex items-center gap-2 mt-4">
                <MdEmail size={20} color="#BC5F2E" />
                <p>info@expeditionorange.org</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaLocationDot size={20} color="#BC5F2E" />
                <p>Expedition Orange P.O. Box 542 Lisbon, MD 21765</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full">
            <Heading heading={"Drop Us A Line"} />
            <ContactForm />
          </div>
        </div>
      </div>
      <Image alt="contact-us-img" className="w-full" src={contact_bg} />
    </>
  );
}

export default page;
