/** @format */

"use client";
import { API } from "@/api";
// import { visa_img } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TransactionTable = () => {
  const [userInvoices, setInvoices] = useState([]);
  const invocies = async () => {
    try {
      const res = await API.getInvoices();
      if (res?.data?.status?.success) {
        setInvoices(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    invocies();
  }, []);
  return (
    <div className="overflow-x-auto w-full pb-16 overflow-hidden">
      <div className="rounded-md shadow-lg bg-white max-w-[1000px] mt-6 min-w-[500px] overflow-x-auto">
        <div className="text-center grid grid-cols-4 bg-web_darkgreen lg:text-base text-sm sm:gap-2 text-white place-content-center place-items-center font-medium py-3 px-3 sm:px-[20px] rounded-t-lg">
          <p className=" w-full ">Inv.#</p>
          <p className=" w-full ">Donation Type</p>
          <p className="w-full ">Date</p>
          <p className="w-full">Amount</p>
        </div>
        <div className="max-h-[490px] table_scroll overflow-y-auto min-w-[500px] overflow-x-auto">
          {userInvoices?.map((item, index) => (
            <div
              key={index}
              className="text-center grid place-content-center place-items-center grid-cols-4 bg-white gap-2 lg:text-base text-sm max-w-[1000px]  font-medium py-3 px-3 sm:px-[20px] border-b"
            >
              <p className=" text-green-text w-full break-words ">
                {item?.transactionId}
              </p>
              <p className=" w-full text-primaryBrown">{item?.type}</p>
              <p className=" w-full text-green-text ">
                {new Date(item?.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>

              <p className=" text-primaryBrown font-medium">{`$${item?.amount}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
