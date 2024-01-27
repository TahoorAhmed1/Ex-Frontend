/** @format */

"use client";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Form from "./UserForm";
import MonthlyDonation from "./MonthlyDonation";
import Payment from "./PaymentInfo";
import BillingForm from "./BillingForm";
import { useEffect, useState } from "react";
import OneTimeDonation from "./OneTimeDonation";
import { useRouter } from "next/navigation";
import { FaUserLock } from "react-icons/fa6";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { API } from "@/api";

function Donation({ slug }) {
  const [cookies, setCookies] = useState("");
  const [donationAmount, setAmount] = useState([]);
  const [donationType, setDonationType] = useState("oneTimeDonation");
  // console.log(donationType,'hjkhhjkhkhjkkhjkhj')
  const [donationId, setDonationID] = useState(0);
  const [gifts, setGifts] = useState([]);
  const [giftId, setGiftID] = useState(0);
  const [giftError, setGiftError] = useState("");
  const [dctf, setDctf] = useState(true);
  // console.log('giftId', giftId)
  // console.log('donationId', donationId)
  const router = useRouter();
  const [hover, setIsHovered] = useState(false);
  const setType = (type) => {
    router.replace(`/donation/${type}`);
  };
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setCookies(token);
    }
  }, []);

  const getDonations = async (type) => {
    try {
      const res = await API.getDonation(type);

      if (res) {
        setAmount(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const donationLink = async (id, param, dctf) => {
    // console.log(id, param, dctf);
    try {
      if (donationType === "monthlyDonation") {
        if (giftId && id) {
          setGiftError("");
          const res = await API.getDonationLink(id, param, dctf);
          if (res) {
            router.push(res?.data?.data?.paymentURL);
          }
        } else {
          throw new Error("Please Select gift");
        }
      } else if (id) {
        const res = await API.getDonationLink(id, null, dctf);
        console.log(res);
        if (res) {
          router.push(res?.data?.data?.paymentURL);
        }
      }
    } catch (err) {
      if (!giftId) {
        setGiftError("Please Select gift");
      } else {
        setGiftError("");
      }
      console.log(err);
    }
  };

  const getGift = async () => {
    try {
      const res = await API.getGift();
      if (res) {
        setGifts(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (slug == "oneTimeDonation") {
      setDonationType("oneTimeDonation");
      getDonations("ONE_TIME");
    } else if (slug == "monthlyDonation") {
      getGift();
      getDonations("MONTHLY_SUBSCRIPTION");
      setDonationType("monthlyDonation");
    } else if (slug == "honorDonation") {
      setDonationType("honorDonation");
    } else {
      router.replace(`/donation/oneTimeDonation`);
    }
  }, [slug]);

  return (
    <div className="container  md:my-32 my-24 ">
      {/* <Heading heading="Choose A Gift" /> */}
      <h2
        className={`sm:text-[35px] sm:px-6 px-1 text-[24px] font-semibold text-black`}
      >
        {donationType === "oneTimeDonation" ? "Donation" : "Choose A Gift"}
      </h2>

      <div className="grid sm:px-6 px-1 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 items-center text-[18px] mt-[25px]">
        <button
          onClick={() => setType("oneTimeDonation")}
          className={`${
            donationType === "oneTimeDonation"
              ? "bg_gradient_brown text-white"
              : "bg-white text-[#f57834]"
          } w-full md:py-3 hover:bg-[#db6627] transition hover:text-white py-2 text-center rounded-md  border-2 border-[#f57834] `}
        >
          One Time Gift
        </button>
        <button
          onClick={() => setType("monthlyDonation")}
          className={`${
            donationType === "monthlyDonation"
              ? "bg_gradient_brown text-white"
              : "bg-white text-[#f57834]"
          } w-full md:py-3 py-2 text-center rounded-md hover:bg-[#db6627] transition hover:text-white  border-2 border-[#f57834] `}
        >
          Monthly Gift
        </button>
      </div>

      <form className="sm:px-6 px-1">
        {donationType === "oneTimeDonation" && (
          <>
            <OneTimeDonation
              donationAmount={donationAmount}
              donationId={donationId}
              setDonationID={setDonationID}
              dctf={dctf}
              setDctf={setDctf}
            />
            {/* <Form /> */}
            {/* <Payment /> */}
            {/* <BillingForm /> */}
            <div className="mt-[50px] space-y-3 lg:w-[405px] w-full">
              <Button
                type={"button"}
                name={"Donate"}
                handleClick={() => {
                  donationLink(donationId, null, dctf ? 1 : 0);
                }}
              />
              <p className="text-[16px]">
                By clicking donate, your gift will be processed. A donation
                receipt will be emailed to the email address you provided.
              </p>
            </div>
          </>
        )}

        {donationType === "monthlyDonation" &&
          (cookies ? (
            <>
              <MonthlyDonation
                donationAmount={donationAmount}
                donationId={donationId}
                setDonationID={setDonationID}
                setGiftID={setGiftID}
                giftId={giftId}
                gifts={gifts}
                dctf={dctf}
                setDctf={setDctf}
                giftError={giftError}
              />
              {/* <Form /> */}
              {/* <Payment /> */}
              {/* <BillingForm /> */}
              <div className="mt-[50px] space-y-3 lg:w-[405px] w-full">
                <Button
                  name={"Donate"}
                  type={"button"}
                  handleClick={() => {
                    donationLink(donationId, giftId, dctf ? 1 : 0);
                  }}
                />
                <p className="text-[16px]">
                  By clicking donate, your gift will be processed.A donation
                  receipt will be emailed to the email address you provided.
                </p>
              </div>
            </>
          ) : (
            <div
              className={`relative transition py-1 mt-2 ${
                hover && "sm:px-6 px-1"
              } `}
            >
              <Link
                className="absolute top-0 left-0 h-full w-full hover:cursor-pointer flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href={"/login"}
              >
                <div
                  className={`h-full transition w-full absolute top-0 left-0 bg-black ${
                    hover ? "opacity-40" : "opacity-0"
                  } rounded-lg`}
                ></div>
                <div
                  className={`h-[40%] w-[80%] p-12 rounded-lg ${
                    hover ? "opacity-100" : "opacity-0"
                  } flex flex-col justify-center items-center`}
                >
                  <FaUserLock size={100} color="black" />
                  <p className="text-[black] font-bold text-2xl">
                    Login to Donate on Monthly Basis
                  </p>
                </div>
              </Link>
              <MonthlyDonation
                donationAmount={donationAmount}
                donationId={donationId}
                setDonationID={setDonationID}
                setGiftID={setGiftID}
                giftId={giftId}
                gifts={gifts}
              />
              {/* <Form /> */}
              {/* <Payment /> */}
              {/* <BillingForm /> */}
              <div className="mt-[50px] space-y-3 lg:w-[405px] w-full">
                <Button name={"Donate"} />
                <p className="text-[16px]">
                  By clicking donate, your gift will be processed.A donation
                  receipt will be emailed to the email address you provided.
                </p>
              </div>
            </div>
          ))}
      </form>
    </div>
  );
}

export default Donation;
