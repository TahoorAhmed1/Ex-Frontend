import React from "react";
import Heading from "@/components/general/Heading";
import { donationImg1, donationImg2, donationImg3 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import WaysToDonate from "@/components/donation/WaysToDonate";
// import { donationImg1, donationImg2 , donationImg3 } from "@/assets";

export const metadata = {
  title: "Ways To Donate",
  description: "Expedition Orange | Ways To Donate",
};

const arr = [
  {
    heading: "ONE TIME DONATION",
    btnText: "Donate Now",
    bgImg: donationImg1,
    href: "/donation/oneTimeDonation",
  },
  {
    heading: "MONTHLY DONATION",
    btnText: "Donate Monthly",
    bgImg: donationImg2,
    href: "/donation/monthlyDonation",
  },
  {
    heading: "HONOR & MEMORIAL DONATION",
    btnText: "Coming Soon",
    bgImg: donationImg3,
    href: "#",
  },
];
function page() {
  return (
    <div className="my-32 md:my-40">
      {/* <div className="container ">
        <div className="text-center">
          <Heading heading="Ways To Donate" />
        </div>
        <div className="grid grid-cols-3  gap-8 mt-6">
          {arr.map((items, index) => {
            return (
              <div
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
                  className="h-full rounded-b-xl"
                />
                <Link
                  href={items.href}
                  className="bg-[#BC5F2E]/50 sm:px-24 right-0 left-0 max-w-fit mx-auto px-[50px] py-3  absolute text-white rounded-lg bottom-1  border-white border-2 sm:text-base text-xs "
                >
                  {items.btnText}
                </Link>
              </div>
            );
          })}
        </div>
      </div> */}
      <WaysToDonate data={arr} />

      <div className="container sm:mt-36 mt-12">
        <h2 className="text-center md:text-[31px] text-[21px] font-semibold text-black">
          Your donations will be used in the following phases
        </h2>
        <div className="flex flex-col flex-wrap gap-5 mt-6">
          <div className=" border-2 border-[#f57834] flex p-2 gap-1 md:text-base sm:text-sm text-xs rounded-md">
            <h2 className="text-[#f57834] ">Phase 1:</h2>
            <p className="flex-1">
              Logistical support to fund each scheduled ride.
            </p>
          </div>
          <div className=" border-2 border-[#f57834] flex p-2 gap-1 md:text-base sm:text-sm text-xs rounded-md">
            <h2 className="text-[#f57834]  ">Phase 2:</h2>
            <p className="flex-1">
              Donate directly to state veteran home activities departments to
              help fund activities for disabled Vietnam veterans.
            </p>
          </div>
        </div>
      </div>
{/* note */}
      <div className="w-full   bg_gradient_brown  py-3 mt-20 ">
        <div className="container flex justify-center text-white  text-center md:text-base sm:text-sm text-xs">
          <h2>Note:</h2>
          <span className="ml-2">
            During the month(s) we hold a state benefit ride, 100% of all
            donations that month will be donated to the veterans&apos; home(s) in the
            state we ride in!
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
