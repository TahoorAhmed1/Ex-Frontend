/** @format */

"use client";
import {
  dashboard_logo,
  hamberger,
  paymentIcon,
  sidebarImg,
  signoutIcon,
  transactionIcon,
  userIcon,
} from "@/assets";
import { useStateContext } from "@/context/userContext";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  const [active, setActive] = useState();
  const [menu, setMenu] = useState(true);

  const { LogOutUser } = useStateContext();

  useEffect(() => {
    if (path === "/dashboard") {
      setActive("profile");
    } else if (
      path === "/dashboard/payment" ||
      path === "/dashboard/payment/billing-info"
    ) {
      setActive("payment");
    } else if (path === "/dashboard/transaction-history") {
      setActive("transaction");
    }
  }, [path]);

  const handleSigout = () => {
    deleteCookie("token");
    LogOutUser();
    router.push("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`transition z-[101]  bg_gradient md:sticky fixed top-0 left-0 h-screen overflow-hidden shadow-none ${
        menu ? "w-[300px]" : "w-14"
      }`}
    >
      <div className="relative flex flex-col h-full justify-end">
        <div className="absolute top-0 left-0 right-0 z-10">
          {menu && (
            <Link href={"/"} className="p-8 pr-12 pt-10">
              <Image alt="logo" className=" w-60" src={dashboard_logo} />
            </Link>
          )}
          <div className={`${menu ? "pl-8 pt-2" : "pt-24 pl-2"} pr-0`}>
            <div className=" border-t border-white/10 pt-8 lg:pt-12 xl:pt-16"></div>
          </div>
          <div className={`${menu ? "pr-12" : "px-2"}`}>
            <div
              onClick={() => router.push("/dashboard")}
              className={`flex p-2 cursor-pointer mb-4 ${
                menu ? "pl-9 rounded-r-md" : " rounded-md justify-center"
              }   items-center gap-4 ${
                active === "profile" ? "bg-primaryBrown" : ""
              }`}
            >
              <div className="w-[14px] h-[14px] ">
                <Image alt="icon" src={userIcon} className="" />
              </div>
              <p className={`text-white text-lg ${menu ? "" : "hidden"}`}>
                Profile
              </p>
            </div>
            <div
              onClick={() => router.push("/dashboard/payment")}
              className={`flex p-2 cursor-pointer mb-4 ${
                menu ? "pl-9 rounded-r-md" : " rounded-md justify-center"
              }   items-center gap-4 ${
                active === "payment" ? "bg-primaryBrown" : ""
              }`}
            >
              <div className="">
                <Image alt="icon" src={paymentIcon} className="" />
              </div>
              <p className={`text-white text-lg ${menu ? "" : "hidden"}`}>
                Payment
              </p>
            </div>
            <div
              onClick={() => router.push("/dashboard/transaction-history")}
              className={`flex p-2 cursor-pointer mb-4 ${
                menu ? "pl-9 rounded-r-md" : " rounded-md justify-center"
              }   items-center gap-4 ${
                active === "transaction" ? "bg-primaryBrown" : ""
              }`}
            >
              <div className="">
                <Image alt="icon" src={transactionIcon} className="" />
              </div>
              <p
                className={`text-white text-lg ${menu ? "" : "hidden text-xs"}`}
              >
                Transacton History
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        <div
          className={`flex max-w-fit ${
            menu
              ? " mr-12 pl-8 pr-6 rounded-r-md "
              : "mx-auto rounded-md justify-center"
          }  p-2 z-10 bg-web_red cursor-pointer gap-4 mb-4  lg:-translate-y-6 xl:-translate-y-12 -translate-y-2  items-center `}
          onClick={handleSigout}
        >
          <div className="w-4">
            <Image alt="icon" src={signoutIcon} className="" />
          </div>
          <p className={`text-white text-sm ${menu ? "" : "hidden"}`}>
            Sign Out
          </p>
        </div>
        <div className="absolute top-0 left-0 z-0">
          <Image
            alt="background-img"
            src={sidebarImg}
            width={1000}
            height={1000}
          />
        </div>
        <div className="bg-white absolute z-10 -right-2 top-4 w-[46px] h-[46px]  flex items-center justify-center rounded-l-xl">
          <div
            onClick={() => setMenu(!menu)}
            className="bg-web_darkgreen rounded-l-xl w-9 h-9 flex items-center cursor-pointer justify-center"
          >
            <Image
              alt="icon"
              src={hamberger}
              className={`${menu ? "" : "rotate-180"} transition`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
