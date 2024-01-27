"use client";
import { useState } from "react";
import Heading from "../general/Heading";
import Input from "../general/Input";

function Payment() {
  const [method, setMethod] = useState(true);
  return (
    <div className="md:my-24 my-16">
      <Heading heading="Payment Information" />
      <div className=" text-[18px] my-5   space-y-3">
        <label className="">Payment Method</label>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 items-center text-[18px] mt-[25px]">
          <button
            onClick={() => setMethod(true)}
            type="button"
            className={`${
              method
                ? "bg_gradient_brown text-white"
                : "bg-white text-[#f57834]"
            } w-full md:py-3 py-2 text-center rounded-md  border-2 border-[#f57834] hover:bg-[#db6627] transition hover:text-white cursor-pointer`}
          >
            Stripe
          </button>
          <button
            onClick={() => setMethod(false)}
            type="button"
            className={`${
              !method
                ? "bg_gradient_brown text-white"
                : "bg-white text-[#f57834]"
            } w-full md:py-3 py-2 text-center rounded-md   border-2 border-[#f57834] hover:bg-[#db6627] transition hover:text-white cursor-pointer`}
          >
            Paypal
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="gap-y-2 ">
            <label htmlFor="Card Number">Card Number</label>
            <Input
              name={"firstName"}
              placeholder={"... ... ..."}
              type={"text"}
              register={() => {}}
              errors={{ email: "required" }}
              addclass={"border-2  border-[#f57834]"}
            />
          </div>
          <div className="w-full">
            <label htmlFor="Card Number">Expiration Date</label>
            <div className="grid w-full sm:grid-cols-2 grid-cols-1 gap-5">
              <Input
                name={"firstName"}
                placeholder={"MM - Month"}
                type={"date"}
                register={() => {}}
                errors={{ email: "required" }}
                addclass={"border-2  border-[#f57834]"}
              />

              <Input
                name={"firstName"}
                placeholder={"First Name"}
                type={"date"}
                register={() => {}}
                errors={{ email: "required" }}
                addclass={"border-2  border-[#f57834]"}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-5 h-5" />
          <span>Yes, I would like to cover the 3% processing fee.</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
