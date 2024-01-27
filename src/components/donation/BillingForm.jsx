"use client";
import Heading from "../general/Heading";
import Input from "../general/Input";

function BillingForm({update}) {
  return (
    <div className="space-y-3 lg:w-[700px] w-full ">
      <Heading heading={"Billing Information"}></Heading>
      {update
      ?null:
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-5 h-5" />
        <span>
          Uncheck if billing address is not the same as donor address.
        </span>
      </div>
      }
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2 ">
        <Input
          name={"billingAddress1"}
          placeholder={"Billing Address Line 1"}
          type={"text"}
          register={() => {}}
          errors={{ email: "required" }}
        />
        <Input
          name={"billingAddressLine"}
          placeholder={"Billing Address Line 2"}
          type={"text"}
          register={() => {}}
          errors={{ password: "required" }}
        />
        <Input
          name={"billingCountry"}
          placeholder={"Billing Country"}
          type={"text"}
          register={() => {}}
          errors={{ password: "required" }}
        />
        <Input
          name={"billingZipCode"}
          placeholder={"Billing Zip Code"}
          type={"text"}
          register={() => {}}
          errors={{ password: "required" }}
        />
        <Input
          name={"billingCity"}
          placeholder={" Billing City"}
          type={"text"}
          register={() => {}}
          errors={{ password: "required" }}
        />
        <Input
          name={"billingState"}
          placeholder={"Billing State"}
          type={"text"}
          register={() => {}}
          errors={{ password: "required" }}
        />
      </div>
    </div>
  );
}

export default BillingForm;
