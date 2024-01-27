/** @format */

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../general/Button";
import { home1, home_2 } from "@/assets";
import { useRouter } from "next/navigation";
import { API } from "@/api";

function OrangeMission({ bool = true }) {
  const router = useRouter();
  const [donation, setDonation] = useState(0);
  const [amount, setAmount] = useState({});
  const [bandannas, setBandannas] = useState({});
  const [miles, setMiles] = useState({});
  const getStats = async () => {
    try {
      const res = await API.getStats();
      console.log(res, "res")
      const arr = [...res?.data?.data];
      arr.map((i) => {
        i?.type == "donation" && setAmount(i);
        i?.type == "bandannas" && setBandannas(i);
        i?.type == "distance" && setMiles(i);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    setDonation(0);
    setDonation1(0);
    setDonation2(0);
  }, [bool]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (donation < amount?.value - (amount?.value % 10)) {
        setDonation(donation + 10);
      } else if (donation == amount?.value - (amount?.value % 10)) {
        const dona = donation + (amount?.value % 10);
        setDonation(dona);
      }
    }, 1); // Adjust the interval as needed
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [donation, amount]);

  const [donation1, setDonation1] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (donation1 < bandannas?.value) {
        setDonation1(donation1 + 1);
      }
    }, 1); // Adjust the interval as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval2);
  }, [donation1, bandannas]);

  const [donation2, setDonation2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (donation2 < miles?.value) {
        setDonation2(donation2 + 1);
      }
    }, 1); // Adjust the interval as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval1);
  }, [donation2, miles]);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4">
      <div className="flex justify-center ">
        <Image src={home_2} alt="check" className=" rounded-md  w-full " />
      </div>
      <div className="flex flex-col  justify-center lg:pr-32 ">
        <div className="sm:space-y-8 space-y-4">
          <h2 className="sm:text-[35px] text-[21px] font-semibold">
            Expedition Orange Mission Statement
          </h2>
          <p className="sm:text-[18px] text-[15px]">
            Expedition Orange uses horse and rider to raise national awareness
            and bring support to Vietnam veterans and their families suffering
            from Agent Orange exposure.
          </p>
          <Button
            name="Donate Now"
            className={"sm:text-base text-sm"}
            handleClick={() => router.push("/ways-to-donate")}
          />
        </div>
        <div className="">
          <div className="flex mt-10 sm:mt-20 lg:justify-start justify-center lg:gap-10  gap-5">
            <div className="text-center w-[125px] space-y-1">
              <p
                className={`sm:text-[35px] text-[22px] text-primaryBrown font-semibold ${
                  bool && donation == amount?.value && "bounce"
                }`}
              >
                ${donation}
              </p>
              <p className="sm:text-[15px] text-xs">{amount?.label}</p>
            </div>
            <div className="text-center w-[125px] space-y-1">
              <p
                className={`sm:text-[35px] text-[22px] text-primaryBrown font-semibold ${
                  bool && donation1 == bandannas?.value && "bounce"
                }`}
              >
                {donation1}
              </p>
              <p className="sm:text-[15px] text-xs">{bandannas?.label}</p>
            </div>
            <div className="text-center w-[125px] space-y-1">
              <p
                className={`sm:text-[35px] text-[22px] text-primaryBrown font-semibold ${
                  bool && donation2 == miles?.value && "bounce"
                }`}
              >
                {donation2}
              </p>
              <p className="sm:text-[15px] text-xs">{miles?.label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrangeMission;
