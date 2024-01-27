/** @format */

import { useRouter } from "next/navigation";
import React from "react";

function SupportMission() {
  const router = useRouter();
  return (
    <div className="SupportImage  ">
      <div className="bg_gradient_brown_opacity h-full w-full flex flex-col  justify-around text-center place-items-center ">
        <div className=" max-w-[720px] w-full px-3 space-y-10">
          <h3 className="sm:text-4xl sm:leading-[50px] text-[21px] font-semibold text-white ">
            Make a Difference! Your Support Empowers Our Mission to Help Vietnam
            Veterans
          </h3>
        </div>
        <button
          className="px-8 py-2 border-white transition text-white bg-web_brown hover:text-primaryBrown hover:bg-white border rounded"
          onClick={() => router.push("/our-mission")}
        >
          Support The Mission
        </button>
      </div>
    </div>
  );
}

export default SupportMission;
