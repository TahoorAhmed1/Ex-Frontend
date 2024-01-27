/** @format */

"use client";
import { checkedIcon } from "@/assets";
import Button from "@/components/general/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useStateContext } from "@/context/userContext";
import { API } from "@/api";
import { notify } from "@/utils/notify";
import { BiLoaderAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { SaveUser, user, setUser } = useStateContext();
  const [donationType, setDonationType] = useState("ONE_TIME");
  const [donationPlans, setDonationPlans] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [giftId, setGiftID] = useState(0);
  const [dctf, setDctf] = useState(true);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [planloader, setPlanLoader] = useState(false);
  const [giftloader, setGiftLoader] = useState(false);

  const getUser = async () => {
    setLoader(true);
    try {
      const res = await API.getUser();
      SaveUser(res?.data?.data);
      setUser(res?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const deleteSubs = async () => {
    setLoader(true);
    try {
      const res = await API.deleteDonation();
      if (res?.data?.status?.success) {
        notify(
          "success",
          res?.data?.data?.message || "Your Subscription has been canceled"
        );
      }
    } catch (err) {
      console.log(err);
      notify(
        "error",
        err?.res?.data?.data?.message || "Your Subscription has been canceled"
      );
    } finally {
      getUser();
      setLoader(false);
    }
  };

  const getDonationplans = async (type) => {
    setPlanLoader(true);
    try {
      const res = await API.getDonation(type);
      if (res?.data?.status?.success) {
        setDonationPlans(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPlanLoader(false);
    }
  };

  const donationLink = async (id, param, dctf) => {
    console.log(id, param, dctf);
    try {
      if (donationType === "MONTHLY_SUBSCRIPTION") {
        if (giftId && id) {
          setError("");
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
        setError("Please Select gift");
      } else {
        setError("");
      }
      console.log(err);
    }
  };

  const getGift = async () => {
    setGiftLoader(true);
    try {
      const res = await API.getGift();
      if (res) {
        setGifts(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setGiftLoader(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (donationType) {
      getDonationplans(donationType);
    }
    if (donationType === "MONTHLY_SUBSCRIPTION") {
      getGift();
    }
  }, [donationType]);

  return (
    <div className="relative">
      <div className="absolute max-w-[230px] max-h-[200px] hidden md:block -top-9 right-0 bg-cover bg-no-repeat bg-center bg_profile_design"></div>

      <div className="dashboard_container py-20">
        {loader ? (
          <div className="flex justify-center items-center h-[60vh] ">
            <BiLoaderAlt size={40} className="animate-spin" />
          </div>
        ) : user?.subscriptions?.length &&
          user?.subscriptions[0]?.status === "ACTIVE" ? (
          /* subscribed_plan*/
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
            <div className="flex flex-col gap-14 max-w-[500px]">
              {/* heading */}
              <h2 className="text-2xl sm:text-3xl uppercase font-semibold">
                Your Selected Plan
              </h2>
              {/* plan */}
              <div className="flex flex-row gap-6 items-center justify-center py-14 rounded border border-green-border w-full ">
                <p className="text-green-text text-lg sm:text-xl font-semibold">
                  {`$${user?.subscriptions[0]?.amount}`}
                </p>
                <Image
                  src={checkedIcon}
                  alt="checkedIcon"
                  width={1000}
                  height={1000}
                  className="h-6 w-6"
                />
              </div>
              {/* button */}
              <Button
                handleClick={deleteSubs}
                newClass={
                  " w-full text-green-text font-medium text-lg border border-green-border py-2.5 shadow_2xl px-8 rounded-md hover:bg-green-background cursor-pointer hover:text-white"
                }
                name={"Unsubscribe"}
              />
            </div>
          </div>
        ) : (
          <div className=" flex flex-col gap-8">
            {/* subscription_plans */}
            <div className=" flex flex-col gap-4">
              {/* heading */}
              <h2 className="capitalize text-2xl sm:text-3xl text-black font-bold">
                Choose Donation
              </h2>
              {/* tabs */}
              <div className="flex flex-row  flex-wrap gap-2 sm:flex-nowrap w-full justify-between items-center">
                <div className=" flex flex-row items-center">
                  <div
                    onClick={() => setDonationType("ONE_TIME")}
                    className={`cursor-pointer text-sm sm:text-base px-4 py-2 ${
                      donationType === "ONE_TIME"
                        ? "bg-green-background text-white "
                        : "bg-white text-black shadow-md shadow-gray-500"
                    } rounded-lg  max-w-fit`}
                  >
                    Single Donation
                  </div>
                  <div
                    onClick={() => setDonationType("MONTHLY_SUBSCRIPTION")}
                    className={`cursor-pointer text-sm sm:text-base px-4 py-2 ${
                      donationType === "MONTHLY_SUBSCRIPTION"
                        ? "bg-green-background text-white "
                        : "bg-white text-black shadow-md shadow-gray-500"
                    } rounded-lg  max-w-fit `}
                  >
                    Monthly Donation
                  </div>
                </div>
                <div className="flex flex-row gap-1 items-center px-6 z-[100]">
                  <label
                    htmlFor="dctf"
                    className="cursor-pointer max-w-fit text-bold"
                  >
                    cover transaction fee
                  </label>
                  <input
                    id="dctf"
                    type="checkbox"
                    onChange={() => {
                      setDctf(!dctf);
                    }}
                    defaultChecked={dctf}
                  />
                </div>
              </div>

              {planloader ? (
                <div className="flex justify-center items-center h-[40vh] ">
                  <BiLoaderAlt
                    size={40}
                    className="animate-spin text-green-background"
                  />
                </div>
              ) : (
                // subscriptions_plan

                <div className="grid  grid-cols-1 lg:grid-cols-3 gap-3">
                  {donationPlans?.map((item) => {
                    return (
                      <div
                        onClick={() =>
                          donationLink(item?.id, giftId ?? null, dctf ? 1 : 0)
                        }
                        className="flex flex-row gap-6 items-center justify-center  rounded border border-green-border w-full h-[60px] cursor-pointer hover:bg-green-background group"
                      >
                        <p className="text-green-text text-lg sm:text-xl font-semibold group-hover:text-white">
                          {item?.amount === null
                            ? "Choose your best gift"
                            : `${
                                !dctf
                                  ? `$${item?.amount}`
                                  : `$${item?.amount} + ${(
                                      item?.amountPlusTransactionFees -
                                      item?.amount
                                    ).toFixed(2)}`
                              }`}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* subcription_gifts */}
            {donationType === "MONTHLY_SUBSCRIPTION" && (
              <>
                {giftloader ? (
                  <div className="flex justify-center items-center h-[20vh] ">
                    <BiLoaderAlt
                      size={40}
                      className="animate-spin text-green-background"
                    />
                  </div>
                ) : (
                  <div className=" flex flex-col gap-4">
                    {/* heading */}
                    <div className="flex flex-row items-center gap-2">
                      <h2 className="capitalize text-2xl sm:text-3xl text-black font-bold max-w-fit">
                        Choose Gift
                      </h2>
                      {error && <span className="text-red-500">{error}</span>}
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1  gap-8 mt-5">
                      {gifts?.map((item) => {
                        return (
                          <div
                            className="relative w-full rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setGiftID(item?.id)}
                          >
                            {item?.id === giftId && (
                              <div className="absolute inset-0 w-full h-full bg-black/25"></div>
                            )}
                            <div className="p-4 w-full">
                              <Image
                                src={item?.picture}
                                alt={item?.title}
                                width={1000}
                                height={1000}
                                className={`w-full h-60 md:h-80 object-cover rounded-xl shadow-md ${
                                  item?.id !== giftId
                                    ? "group-hover:scale-105"
                                    : ""
                                } transition-all ease-in-out duration-300`}
                              />

                              <div className="space-y-2 mt-5">
                                <h2 className="sm:text-[22px] text-[18px] font-semibold ">
                                  {item?.title}
                                </h2>
                                <p className="text-[16px]">
                                  Please allow 4 - 6 weeks for your gift to
                                  arrive.
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
