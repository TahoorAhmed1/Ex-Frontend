/** @format */

"use client";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";

const Sidebar = ({ toggleDrawer, cookies, isOpen, handleBodyScroll }) => {
  return (
    <div className="">
      <Drawer
        customIdSuffix={`EZDrawer__checkbox`}
        open={isOpen}
        onClose={() => {
          toggleDrawer();
          handleBodyScroll();
        }}
        direction="right"
      >
        <div className="bg_gradient_brown  h-[100%] overflow-y-auto">
          <div className="flex justify-end text-white pt-10 pb-2 px-4  ">
            <RxCross2 onClick={toggleDrawer} className="w-6 h-6" />
          </div>
          <ul className="font-medium capitalize  flex  flex-col px-4 space-y-2 py-2 md:text-lg text-base cursor-pointer text-white">
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/"}>
                Home
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/our-mission"}>
                Our Mission
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/photo-gallery"}>
                Photo Gallery
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/journal"}>
                Journal
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/sponsor"}>
                Sponsor
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/ways-to-donate"}>
                Ways To Donate
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/resources"}>
                Resources
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/events"}>
                Events
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/contact-us"}>
                Contact Us
              </Link>
            </li>
            <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
              <Link onClick={toggleDrawer} href={"/share-your-story"}>
                Share your Story
              </Link>
            </li>
            {!cookies ? (
              <>
                <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
                  <Link onClick={toggleDrawer} href={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
                  <Link onClick={toggleDrawer} href={"/signup"}>
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="hover:bg-white rounded-lg px-5 py-2 hover:text-orange-500">
                <Link onClick={toggleDrawer} href={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="mr-6 my-16">
            <Link onClick={""} href={"/ways-to-donate"} className="">
              <Button
                name={"Donate"}
                className="bg_gradient text-white w-full mx-2 ml-4"
              />
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default Sidebar;
