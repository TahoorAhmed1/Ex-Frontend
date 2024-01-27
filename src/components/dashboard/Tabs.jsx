"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Tabs() {
  const path = usePathname();
  // console.log(path)
  return (
    <div className="">
      {path === "/dashboard/payment" ||
      path === "/dashboard/payment/billing-info" ? (
        <div className="flex flex-row -mt-4 dashboard_container">
          <Link
            href="/dashboard/payment"
            className={`capitalize px-2 sm:px-14 py-3 text-sm rounded-md shadow-lg shadow-gray-500/50 md:text-lg ${
              path === "/dashboard/payment"
                ? "text-white bg-green-background"
                : "text-green-text bg-white"
            }`}
          >
            Subscription
          </Link>
          <Link
            href="/dashboard/payment/billing-info"
            className={`capitalize px-2 sm:px-14 py-3 text-sm rounded-md shadow-lg shadow-gray-500/50 md:text-lg ${
              path === "/dashboard/payment/billing-info"
                ? "text-white bg-green-background"
                : "text-green-text bg-white"
            }`}
          >
            Billing Information
          </Link>
        </div>
      ) : null}
    </div>
  );
}
