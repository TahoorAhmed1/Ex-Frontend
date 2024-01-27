import React, { useEffect, useState } from "react";
import Image from "next/image";
import { teamMember1, teamMember2, teamMember3, teamMember4 } from "@/assets";
import { MdStarRate } from "react-icons/md";
import { API } from "@/api";

const arr = [
  {
    name: "Colt Romberger",
    designation: "President/Founder",
    img: teamMember1,
  },
  {
    name: "Mike McGaharn",
    designation: "Vice President",
    img: teamMember2,
  },
  {
    name: "Gary O’Neilin",
    designation: "Secretary/Webmasterr",
    img: teamMember3,
  },
  {
    name: "Sherri Popejoy",
    designation: "Treasurer",
    img: teamMember4,
  },
  {
    name: "Sherri Popejoy",
    designation: "Treasurer",
    img: teamMember4,
  },
  {
    name: "Sherri Popejoy",
    designation: "Treasurer",
    img: teamMember4,
  },
];
const MeetOurTeam = () => {
  const [team, setTeam] = useState([]);
  const getTeam = async () => {
    try {
      const res = await API.getTeam();
      setTeam(res?.data?.data?.members);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div className="bg-[url('../assets/Image/home/MeetOurTeamBG.png')] bg-no-repeat w-full bg-cover bg-center md:py-60 pb-60 pt-20">
      <div className="container">
        <div className=" text-white w-full text-center flex flex-col gap-3">
          <h2 className=" font-semibold sm:text-[35px] text-[21px] ">
            Meet Our Team
          </h2>
          <p className=" sm:text-xl text-base mt-2">
            Meet our dedicated team of changemakers.
          </p>
        </div>
        <div className=" flex justify-center flex-wrap gap-10 mt-11">
          {team?.map((items, index) => {
            return (
              <div
                className={`max-h-[350px] relative  border_custom hover:scale-110 transition`}
                key={index}
              >
                <Image
                  src={items.picture}
                  alt="team member"
                  height={1000}
                  width={1000}
                  className="object-cover w-[300px] h-full"
                />
                <div className="bg-white px-3 py-2 text-center rounded-lg absolute -bottom-[10%] left-[20%]">
                  <div className="flex items-center gap-1">
                    <span className=" text-[#C05E2B] text-xl">
                      <MdStarRate />
                    </span>
                    <h4 className=" font-bold">{items.name}</h4>
                    <span className="text-[#C05E2B] text-xl">
                      <MdStarRate />
                    </span>
                  </div>
                  <p className=" text-xs">{items.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
