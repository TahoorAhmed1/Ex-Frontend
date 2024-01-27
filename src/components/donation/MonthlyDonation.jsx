/** @format */

import Image from "next/image";
import Heading from "../general/Heading";
import { oneTimeDonation } from "@/assets";
import { useState } from "react";

function MonthlyDonation({
  donationAmount,
  donationId,
  setDonationID,
  gifts,
  setGiftID,
  giftId,
  dctf,
  setDctf,
  giftError,
}) {
  const data = [
    { amount: "$250", id: "1" },
    { amount: "$150", id: "2" },
    { amount: "$100", id: "3" },
    { amount: "$75", id: "4" },
    { amount: "$50", id: "5" },
  ];
  const [value, setValue] = useState();
  const onChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    // console.log(selectedValue);
  };

  return (
    <>
      <div className="md:my-8 my-5 space-y-8 ">
        <div className=" flex flex-col gap-4 lg:w-[603.178px] w-full ">
          <p>
            As a monthly donor of $19 or more, you will receive a gift from
            Expedition Orange.
          </p>
          <div className="flex flex-row gap-1 items-center">
            <label className="cursor-pointer max-w-fit" htmlFor="dctf">
              cover transaction fee
            </label>
            <input
              defaultChecked={dctf}
              onChange={() => {
                setDctf(!dctf);
              }}
              type="checkbox"
              id="dctf"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {donationAmount?.map((item) => (
              <label
                htmlFor={item?.id}
                key={item?.id}
                className={`w-full text-center py-2.5 rounded-md ${
                  item?.id === donationId
                    ? "bg_gradient_brown text-white"
                    : "bg-white border-2 border-[#f57834] text-[#f57834] hover:bg-[#db6627] transition hover:text-white cursor-pointer"
                }`}
              >
                <input
                  type="radio"
                  name="radio1"
                  value={item?.id}
                  id={item?.id}
                  className="hidden"
                  checked={value === item?.id}
                  onChange={onChange}
                  onClick={() => setDonationID(item?.id)}
                />
                {item?.amount === null
                  ? "Your Best Gift"
                  : `${
                      !dctf
                        ? `$${item?.amount}`
                        : `$${item?.amount} + ${(
                            item?.amountPlusTransactionFees - item?.amount
                          ).toFixed(2)}`
                    }`}
              </label>
            ))}
          </div>
        </div>
        {/* gifts */}
        <div className="">
          <div className="flex flex-row gap-2 items-center">
            <Heading heading={"Your Thank You Gift"} />
            {giftError && <span className="text-red-500">{giftError}</span>}
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-8 mt-5">
            {gifts?.map((item) => {
              return (
                item?.isActive && (
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
                          item?.id !== giftId ? "group-hover:scale-105" : ""
                        } transition-all ease-in-out duration-300`}
                      />

                      <div className="space-y-2 mt-5">
                        <h2 className="sm:text-[22px] text-[18px] font-semibold ">
                          {item?.title}
                        </h2>
                        <p className="text-[16px]">
                          Please allow 4 - 6 weeks for your gift to arrive.
                        </p>
                      </div>
                    </div>
                  </div>
                )
              );
            })}

            {/* <div>
              <Image
                src={oneTimeDonation}
                alt=""
                className="w-full rounded-xl shadow-md"
              ></Image>
              <div className="space-y-2 mt-5">
                <h2 className="sm:text-[22px] text-[18px] font-semibold">
                  Lorem Ipsum Please allow 4 - 6 weeks for your gift to arrive.
                </h2>
                <p>Please allow 4 - 6 weeks for your gift to arrive.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MonthlyDonation;
