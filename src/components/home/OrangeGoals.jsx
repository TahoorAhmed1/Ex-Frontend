/** @format */

import { useEffect, useRef, useState } from "react";
import Heading from "../general/Heading";
import OrangeGoalCard from "./OrangeGoalCard";
import { cam, medal, salute, speaker, vid } from "@/assets";

function OrangeGoals() {
  const arr = [
    {
      icon: speaker,
      title: "Raising Awareness",
      desc: "Through horseback journeys, we shine a spotlight on Vietnam veterans suffering from Agent Orange exposure.",
    },
    {
      icon: cam,
      title: "Capturing Stories",
      desc: "We interview Vietnam veterans, their families, doctors and experts regarding Agent Orange to better inform other veterans and those who may not be aware of its toxic effects.",
    },
    {
      icon: salute,
      title: "Orange Bandana Salute",
      desc: `We aim to complete a benefit horseback ride in all 50 states and provide Vietnam veterans living at veteran care facilities with a signed orange bandana and a donation to their activities department as a way to say "Welcome Home."`,
    },
    {
      icon: medal,
      title: "Toxic Exposure Medal of Military Merit",
      desc: "We are working with members of the U.S. Congress to draft and create the first ever U.S. Military decoration to be awarded to service members affected by toxic exposure during their service.",
    },
  ];
  const myDivRef1 = useRef(null);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    // Function to check if the div is in the scroll height
    const checkScroll = () => {
      checkScrollForDiv(myDivRef1);
    };

    const checkScrollForDiv = (ref) => {
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
        setBool(true);
      } else {
        // Remove custom class if not in scroll height
        setBool(false);
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
  }, [myDivRef1]);
  return (
    <div className="mt-10 sm:mt-20 min-h-[40vh]" ref={myDivRef1} id="myDiv">
      <div className="sm:mb-[50px] mb-10">
        <Heading heading="Expedition Orange Goals" className={"flex items-center justify-center"}/>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 sm:gap-10 gap-5">
        {arr.map((i, index) => {
          return (
            <OrangeGoalCard
              icon={i?.icon}
              title={i?.title}
              desc={i?.desc}
              bool={bool}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrangeGoals;
