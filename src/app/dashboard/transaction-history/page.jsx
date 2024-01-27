/** @format */

import TransactionTable from "@/components/dashboard/TransactionTable";
import React from "react";

const page = () => {
  return (
    <div className="h-full relative">
      <div className="absolute max-w-[230px] hidden md:block max-h-[200px] top-0 right-0 bg-cover bg-no-repeat bg-center bg_profile_design"></div>

      <div className="dashboard_container h-full py-8 xl:pt-10 w-full  overflow-hidden">
        <h2 className="text-[26px] font-bold">Transaction History</h2>
        <TransactionTable />
      </div>
    </div>
  );
};

export default page;
