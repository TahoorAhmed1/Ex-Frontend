/** @format */

"use client";
import {
  avatar,
  homeIcon,
  nav_design_img1,
  nav_design_img2,
  notificationIcon,
  searchIcon,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStateContext } from "../../context/userContext";

const DashboradNav = () => {
  const { user } = useStateContext();

  return (
    <div className=" bg-primaryBrown overflow-y-hidden overflow-x-hidden">
      {/* navbar */}
      <div className="dashboard_container relative md:py-8 py-6 flex gap-2 items-center lg:justify-between justify-end">
        <h1 className="hidden z-10 lg:block text-white xl:text-3xl text-2xl font-bold">
          Welcome Back!{" "}
          {user && (
            <>
              {user?.firstName?.slice(0, 1).toUpperCase() +
                user?.firstName?.slice(1)}{" "}
            </>
          )}
        </h1>
        <div className="z-10 flex items-center justify-end xl:gap-4 lg:gap-1 gap-4">
          <div className="flex flex-1 items-center xl:gap-3 lg:gap-1.5 gap-3">
            <Link
              href={"/"}
              className="bg-web_brown flex p-2 cursor-pointer rounded-md items-center justify-center"
            >
              <Image alt="icon" src={homeIcon} />
            </Link>
            {/* <div className="bg-web_brown hidden lg:flex p-2 cursor-pointer rounded-md items-center justify-center">
              <Image alt="icon" src={notificationIcon} />
            </div> */}
            {/* <div className="bg-web_brown gap-2 p-2 px-3 rounded-md w-full lg:min-w-[192.5px] overflow-hidden xl:min-w-[270px] md:min-w-[270px] max-w-[275px] xl:max-w-[275px] lg:max-w-[192.5px] hidden md:flex items-center flex-1">
              <div>
                <Image
                  alt="icon"
                  src={searchIcon}
                  className="cursor-pointer "
                />
              </div>
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-white/80"
                placeholder="Search your transactions by MD.NO"
              />
            </div> */}
          </div>
          <Link
            href={"/dashboard"}
            className=" min-w-[160px] flex items-center justify-center"
          >
            <div className="flex gap-2 items-center">
              <Image
                src={user?.picture ?? avatar}
                alt="user-avatar"
                width={100}
                height={100}
                className="w-12 shadow-2xl h-12 rounded-full"
              />
              {user && (
                <div>
                  <h4 className="font-semibold text-white">
                    {user?.firstName?.slice(0, 1)?.toUpperCase() +
                      user?.firstName?.slice(1)}{" "}
                    {user?.lastName?.slice(0, 1)?.toUpperCase() +
                      user?.lastName?.slice(1)}
                  </h4>
                  {/* <p className="text-xs text-white">UserID #512512</p> */}
                </div>
              )}
            </div>
          </Link>
        </div>
        <Image
          alt="design-img"
          src={nav_design_img1}
          className="absolute top-0 right-[15%]"
        />
        <Image
          alt="design-img"
          src={nav_design_img2}
          className="absolute md:-bottom-[20%] -bottom-[44%] -left-[10%]"
        />
        <Image
          alt="design-img"
          src={nav_design_img2}
          className="absolute -top-[24%] -right-[10%] rotate-180"
        />
      </div>
      {/* end-navbar */}
    </div>
  );
};

export default DashboradNav;
