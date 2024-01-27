/** @format */

"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../general/Heading";
import {
  heliOurMission,
  imageShadow,
  ourMission1,
  ourMission2,
  ourMission3,
} from "@/assets";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import MeetOurTeam from "../general/MeetOurTeam";

function OurMission() {
  const myDivRef1 = useRef(null);
  const myDivRef2 = useRef(null);
  const myDivRef3 = useRef(null);

  useEffect(() => {
    // Function to check if the div is in the scroll height
    const checkScroll = () => {
      checkScrollForDiv(myDivRef1, "fade-in-right");
      checkScrollForDiv(myDivRef2, "fade-in-left");
      checkScrollForDiv(myDivRef3, "fade-in-right");
    };

    const checkScrollForDiv = (ref, className) => {
      const myDiv = ref.current;
      const scrollPosition = window.scrollY;
      const divPosition = myDiv.offsetTop;
      const divHeight = myDiv.offsetHeight;

      // Check if the div is in the scroll height
      if (
        scrollPosition > divPosition - 1000 &&
        scrollPosition < divPosition + divHeight - 100
      ) {
        // Add custom class if in scroll height
        myDiv.classList.add(className);
      } else {
        // Remove custom class if not in scroll height
        myDiv.classList.remove(className);
      }
    };

    // Attach the function to the scroll event
    window.addEventListener("scroll", checkScroll);

    // Call the function initially in case the divs are already in the scroll height on page load
    checkScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [myDivRef1, myDivRef2, myDivRef3]);

  return (
    <div className="">
      <div className="text-center lg:mb-20 mb-10 mt-20">
        <h3 className="sm:text-[35px] text-center text-[24px] font-semibold ">
          Our Mission
        </h3>
      </div>
      <div className="container">
        {/* First Section */}
        <div
          className="grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-2 fade-in-right"
          ref={myDivRef1}
          id="myDiv1"
        >
          <div className="w-full  lg:max-w-[600px] rounded-md">
            <Image
              src={ourMission1}
              alt={`ourMission`}
              width={800}
              height={800}
              className="w-full  "
            ></Image>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 relative  min-h-[300px] w-full">
            <div className="absolute left-[20%] -top-10">
              <Image
                src={heliOurMission}
                height={1000}
                width={1000}
                className="object-cover"
              />
            </div>
            <div className="gap-5 absolute top-1/2 transform -translate-y-1/2 ">
              <h3 className="sm:text-[31px] text-[21px] font-semibold my-5">
                Expedition Orange Mission Statement
              </h3>
              <p className="sm:text-[18px] text-sm font-normal">
                Expedition Orange uses horse and rider to raise national
                awareness and bring support to Vietnam veterans and their
                families suffering from Agent Orange exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div
          className="grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-6 mt-10"
          ref={myDivRef2}
          id="myDiv2"
        >
          <div className="lg:order-last order-first w-full lg:max-w-[600px] rounded-md">
            <Image
              src={ourMission2}
              alt={`ourMission`}
              width={1000}
              height={1000}
              className="w-full"
            ></Image>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="sm:text-[31px] font-semibold text-[21px] ">
              A Brief History of Agent Orange
            </h3>
            <p className="sm:text-[18px] text-sm font-normal">
              During the Vietnam War, Agent Orange was a toxic herbicide the US
              Government used to kill foliage making it easier for our troops to
              see through the dense jungle canopy. During the war, the US
              military dubbed its use of Agent Orange as “Operation Ranch Hand”
              in which the adverse effects of its use on our veterans were
              unknown at the time.
            </p>
            <p className="sm:text-[18px] text-sm font-normal">
              It is unknown how many veterans have and are currently suffering
              from the effects of Agent Orange, as it was not tracked by the US
              Government for decades. Today, many believe over 400,000 Vietnam
              veterans are currently suffering from their exposure and tens of
              thousands have already died.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div
          className="grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-6 mt-10"
          id="myDiv3"
          ref={myDivRef3}
        >
          <div className="w-full lg:max-w-[600px] rounded-md">
            <Image
              src={ourMission3}
              alt={`ourMission`}
              width={1000}
              height={1000}
              className="w-full"
            ></Image>
          </div>

          <div className="flex flex-col justify-center space-y-5 ">
            <h3 className="sm:text-[31px] text-[21px] font-semibold">
              Expedition Orange Goals
            </h3>
            <p className="sm:text-[18px] text-sm font-normal flex">
              <span>
                <FiCheck className="text-orange-500 inline-block mr-2" />
              </span>
              To raise national awareness for the issue of Agent Orange exposure
              and the resulting illnesses.
            </p>
            <p className="sm:text-[18px] text-sm font-normal flex">
              <span>
                <FiCheck className="text-orange-500 inline-block mr-2" />
              </span>
              To meet and interview veterans, family members, doctors, and
              experts in regards to Agent Orange and its effects.
            </p>
            <p className="sm:text-[18px] text-sm font-normal flex">
              <span>
                <FiCheck className="text-orange-500 inline-block mr-2" />
              </span>
              To create a Video Documentary of the rides and interviews which
              will serve as a tool to help expand outreach, while also serving
              as a resource tool Vietnam veterans and their families can use to
              find assistance.
            </p>
            <p className="sm:text-[18px] text-sm font-normal flex">
              <span>
                <FiCheck className="text-orange-500 inline-block mr-2" />
              </span>
              To support disabled Vietnam veterans living in veteran homes
              across the nation through funded activities. Expedition Orange
              wants to make sure Vietnam veterans never feel they are alone and
              receive a proper welcome home through our “Orange Bandana Salute”
              campaign.
            </p>
            <p className="sm:text-[18px] text-sm font-normal flex">
              <span>
                <FiCheck className="text-orange-500 inline-block mr-2" />
              </span>
              To work with the U.S. Congress to create the first ever Toxic Exposure Medal of Military Merit.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <MeetOurTeam />
      </div>
    </div>
  );
}

export default OurMission;
