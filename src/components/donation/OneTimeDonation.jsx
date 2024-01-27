/** @format */

"use client";
import { useState } from "react";

function OneTimeDonation({ donationAmount, setDonationID, donationId, dctf, setDctf }) {
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
  };

  return (
    <div className="md:my-8 my-5 space-y-8 ">
      <div className="flex flex-col gap-4 lg:w-[603.178px] w-full ">
        {/* <h2>Monthly Gift Message</h2>
        <p>
          You'll make the most impact for our wounded warriors when you support
          them with a monthly gift. As a monthly donor of $19 or more, you will
          receive a Wounded Warrior Project® fleece blanket.
        </p> */}
        <div className="flex flex-row gap-1 items-center">
          <label className="cursor-pointer max-w-fit" htmlFor="dctf">
            cover transaction fee
          </label>
          <input
            onChange={() => {
              setDctf(!dctf);
            }}
            defaultChecked={dctf}
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
                : `${!dctf ? `$${item?.amount}` : `$${item?.amount} + ${(item?.amountPlusTransactionFees - item?.amount).toFixed(2)}`}`}
            </label>
          ))}
        </div>
        {/* <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <p>Make this a gift in honor or memory of an individual.</p>
        </div> */}
      </div>
    </div>
  );
}

export default OneTimeDonation;
