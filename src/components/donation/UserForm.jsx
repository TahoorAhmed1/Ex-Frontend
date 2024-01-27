"use client";
import React from "react";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Heading from "../general/Heading";

function Form({ update }) {
  return (
    <div className="w-full">
      {update ? null : <Heading heading="Your Information" />}

      <div className="space-y-8 lg:w-[700px] w-full">
        <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-x-5 gap-y-2  my-5 ">
          <Input
            name={"firstName"}
            placeholder={"First Name"}
            type={"text"}
            register={() => {}}
            errors={{ email: "required" }}
          />
          <Input
            name={"lastName"}
            placeholder={"Last Name"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <Input
            name={"addressLine1"}
            placeholder={"Address Line 1"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <Input
            name={"addressLine2"}
            placeholder={"Address Line 2"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <SelectInput
            name={"country"}
            placeholder={"Country"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <Input
            name={"zipCode"}
            placeholder={"Zip Code"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />

          <Input
            name={"city"}
            placeholder={"City"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <Input
            name={"State"}
            placeholder={"State"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <Input
            name={"phoneNumber"}
            placeholder={"Phone Number"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
          <Input
            name={"emailAddress"}
            placeholder={"Email Address"}
            type={"text"}
            register={() => {}}
            errors={{ password: "required" }}
          />
        </div>
        {update ? null : (
          <div className="  space-y-3">
            <div className="flex space-x-3">
              <input type="checkbox" className="w-4 h-4 rounded-2xl" />
              <span>
                Yes, I would like to receive communications from WWP with
                updates on warriors and programs.
              </span>
            </div>
            <hr />
            <div className=" flex items-center space-x-3">
              <input type="checkbox" className="w-4 h-4 " />
              <span>This donation is on behalf of a company.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
