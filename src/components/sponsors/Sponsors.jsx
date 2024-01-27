import React from "react";
import Heading from "../general/Heading";

function Sponsors() {
  return (
    <div className="sm:min-h-[70vh] min-h-[50vh] flex items-center justify-center  ">
      <div className="text-center space-y-8">
        {/* <Heading heading={"Sponsors"} /> */}
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          Sponsors
        </h2>

        <div className="px-16 py-8 bg_gradient_brown rounded-md">
          <h2 className="sm:text-[26px] text-[21px] text-white">
            “Currently seeking corporate sponsors to fund State Benefit Rides.”
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
