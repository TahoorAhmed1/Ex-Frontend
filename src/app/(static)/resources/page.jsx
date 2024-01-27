import { bulltePointer } from "@/assets";
import Button from "@/components/general/Button";
import Heading from "@/components/general/Heading";
import ResourcesLi from "@/components/resources/ResourcesLi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Resources",
  description: "Expedition Orange | Resources",
};
const VVA = [
  {
    title:
      "VVA self-help guides for Vietnam veterans and families impacted by Agent Orange",
    href: null,
    type: "media"
  },
  {
    title:
      "Has Your Child or Grandchild&apos;s Health Been Affected by Your Military Service?",
    href: "https://vva.org/wp-content/uploads/2014/12/AO-Checklist_3panel-FINAL.pdf",
  },
  {
    title:
      "Self-Help Guide to Service-Related Disability Compensation for Exposure to Agent Orange for Veterans and Their Families",
    href: "https://vva.org/wp-content/uploads/2014/12/AgentOrangeGuide.pdf",
  },
];

const VA = [
  {
    title:
    "Veterans Exposed to Agent Orange &#8209; Compensation Eligibility,Information, and How to Apply",
    href:  "https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/",
    type : "media"
  },
  {
    title:
    "The PACT Act and your VA benefits | Veterans Affairs",
    href:  "https://www.va.gov/resources/the-pact-act-and-your-va-benefits/",
  },
  {
    title:
    "PACT ACT: Honoring Our Promise to Addres Comprehensive Toxics Act",
    href:  "https://www.va.gov/files/2023-10/Quick%20Guide_PACT%20Act_October%202023%20v3.pdf",
  },
  {
    title:
    "PACT ACT: overview",
    href:  "/PACTActOverview101_v11.7.22.pdf",
  },
];

function page() {
  return (
    <div className="container md:my-32 my-24">
      <div className="text-center mb-10">
        {/* <Heading heading={"Resources"} /> */}
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          Resources
        </h2>
      </div>

      <div className="flex flex-col ">
        <div className=" flex flex-col gap-2">

        <a
          href="https://vva.org/what-we-do/outreach-programs/agent-orange/"
          target="_blank"
          className="sm:text-xl text-[18px] lg:text-2xl font-bold hover:text-primaryBrown"
        >
          Vietnam Veterans of America (VVA)
        </a>
        {/* <p className="lg:text-lg sm:text-base text-sm mt-3">
          VVA self-help guides for Vietnam veterans and families impacted by
          Agent Orange:
        </p> */}
        {/* <hr className="bg-primaryBrown h-1 mt-4" /> */}

        {VVA?.map((item, index) => {
          return (
            <ResourcesLi key={index} title={item?.title} href={item?.href} type={item?.type ?? null} />
          );
        })}
        </div>
        
        <div className="flex flex-col gap-2 pb-11">
          <a
            href="https://www.va.gov/"
            target="_blank"
            className=" sm:text-xl text-[18px] lg:text-2xl font-bold hover:text-primaryBrown pt-14"
          >
            U.S. Department of Veteran Affairs (VA)
          </a>
          {/* <a
            href="https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/"
            className="lg:text-lg sm:text-base text-sm hover:text-primaryBrown pt-4"
            target="_blank"
          >
            Veterans Exposed to Agent Orange &#8209; Compensation Eligibility,
            Information, and How to Apply
          </a> */}
          {/* <hr className="bg-primaryBrown h-1 mt-4" /> */}
          {VA?.map((item, index)=>{
            return(
              <ResourcesLi key={index} title={item?.title} href={item?.href} type={item?.type ?? null}/>
            )
          })}
          {/* <div className="flex flex-row gap-4 items-center pt-8">
          <Image
            src={bulltePointer}
            alt="pointer"
            width={1000}
            height={1000}
            className="w-4 h-4"
          />
          <a
            href={
              "/PACTActOverview101_v11.7.22.pdf"
            }
            target="_blank"
            className="capitalize text-primaryBrown hover:text-black"
          >
            PACT ACT: overview
          </a>
        </div> */}
        </div>
        <Link href={"/ways-to-donate"}>
          <Button
            name={"Donate Now"}
            // handleClick={()=>router.push("/ways-to-donate")}
          />
        </Link>
      </div>
    </div>
  );
}

export default page;
