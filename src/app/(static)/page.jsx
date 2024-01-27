/** @format */

"use client";
import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import ContactUs from "@/components/home/ContactUs";
import MeetOurTeam from "@/components/general/MeetOurTeam";
import OrangeGoals from "@/components/home/OrangeGoals";
import OrangeMission from "@/components/home/OrangeMission";
import SupportMission from "@/components/home/SupportMission";
import GallerySlugComp from "@/components/gallery/GallerySlugComp";
import Heading from "@/components/general/Heading";
import Button from "@/components/general/Button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function page() {
  const router = useRouter();
  const myDivRef1 = useRef(null);
  const myDivRef2 = useRef(null);
  const myDivRef3 = useRef(null);
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      checkScrollForDiv(myDivRef1, "bool1");
      checkScrollForDiv(myDivRef2, "bool2");
      checkScrollForDiv(myDivRef3, "bool3");
    };
    const checkScrollForDiv = (ref, bool) => {
      const myDiv = ref.current;
      const scrollPosition = window.scrollY;
      const divPosition = myDiv?.offsetTop;
      const divHeight = myDiv?.offsetHeight;

      // Check if the div is in the scroll height
      if (
        scrollPosition > divPosition - 1000 &&
        scrollPosition < divPosition + divHeight - 100
      ) {
        // Add custom class if in scroll height
        bool == "bool1" && setBool(true);
        bool == "bool2" && setBool2(true);
        bool == "bool3" && setBool3(true);
      } else {
        // Remove custom class if not in scroll height
        bool == "bool1" && setBool(false);
        bool == "bool2" && setBool2(false);
        bool == "bool3" && setBool3(false);
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
  }, [myDivRef1, myDivRef2]);
  return (
    <main>
      <Banner />
      
      <div className="container margin_top md:my-32 my-20">
        <div className="mission_section" ref={myDivRef3}>
          <OrangeMission bool={bool3} />
        </div>
        <OrangeGoals />
      </div>
      <SupportMission />
      <div className="container flex flex-col gap-10 justify-center items-center mt-24 md:mt-32">
        <Heading heading={"Photo Gallery"} />
        <div ref={myDivRef1}>
          <GallerySlugComp bool={bool} />
        </div>
        <Button
          name={"View All"}
          handleClick={() => {
            router.push("/photo-gallery");
          }}
        />
      </div>
      <div className="mt-24 md:mt-32">
        <MeetOurTeam />
      </div>
      <div className="container  md:my-32 my-24">
        <div ref={myDivRef2}>
          <Blog bool={bool2} />
        </div>
        <ContactUs />
      </div>
    </main>
  );
}

export default page;
