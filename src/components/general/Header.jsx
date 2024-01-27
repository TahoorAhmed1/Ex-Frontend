/** @format */

"use client";
import Image from "next/image";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaUser, FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { avatar, logo } from "@/assets";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useStateContext } from "@/context/userContext";
import Button from "./Button";
import { useRouter } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookies] = useState("");

  const { user } = useStateContext();
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const cookies = getCookie("token");
    if (cookies) {
      setCookies(cookies);
    }
  }, []);

  const handleBodyScroll = () => {
    document.body.classList.toggle("no-scroll", isOpen);
  };

  // Call the handleBodyScroll function when the sidebar state changes
  useEffect(() => {
    handleBodyScroll();
  }, [isOpen]);

  return (
    <div className="bg-black   lg:py-8 py-4 ">
      <div className="flex items-center justify-between container">
        <div className="lg:flex hidden space-x-5 text-white  text-center">
          <Link
            href={"https://www.facebook.com/expeditionorange"}
            target="_blank"
            className="bg-[#1877F2] p-2 rounded-full hover:animate-pulse hover:-translate-y-1 transition"
          >
            <FiFacebook className="w-7 h-7 " />
          </Link>
          <Link
            href={"https://www.instagram.com/expeditionorange/"}
            target="_blank"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-2 rounded-full hover:animate-pulse hover:-translate-y-1 transition"
          >
            <FiInstagram className="w-7 h-7" />
          </Link>
          <Link
            href={"https://twitter.com/exped_orange"}
            target="_blank"
            className="bg-white p-2 rounded-full hover:animate-pulse hover:-translate-y-1 transition"
          >
            <FaXTwitter className="w-7 h-7" color="black" />
          </Link>
        </div>
        <div className="lg:w-[220px] md:w-[170px] w-[140px]">
          <Link href={"/"}>
            <Image src={logo} alt="alt" width={1000} height={1000} />
          </Link>
        </div>

        {!cookies ? (
          <div className="lg:flex hidden items-center space-x-4 text-white">
            <Button
              name={"Donate"}
              className={"sm:text-base opacity-100 text-sm"}
              handleClick={() => router.push("/ways-to-donate")}
            />
            <div className="space-x-2">
              <Link href={"/login"} className="hover:text-primaryBrown">
                Login{" "}
              </Link>
              <span>|</span>
              <Link href={"/signup"} className="hover:text-primaryBrown">
                Sign Up
              </Link>
            </div>
          </div>
        ) : (
          <div className="lg:flex hidden items-center space-x-4 text-white">
            <Button
              name={"Donate"}
              className={"sm:text-base opacity-100 text-sm"}
              handleClick={() => router.push("/ways-to-donate")}
            />
            <div className="space-x-2">
              <Link href={"/dashboard"} className="hover:text-gray-300">
                <Image
                  width={100}
                  height={100}
                  src={user?.picture ?? avatar}
                  alt="user-avatar"
                  className="w-12 shadow-2xl h-12 rounded-full"
                />
              </Link>
            </div>
          </div>
        )}
        <div className="lg:hidden items-center flex justify-center gap-4">
          {cookies && (
            <Link href={"/dashboard"}>
              <Image
                width={100}
                height={100}
                src={user?.picture ?? avatar}
                alt="user-avatar"
                className="w-12 shadow-2xl h-12 rounded-full"
              />
            </Link>
          )}
          <button
            type="button"
            className="inline-flex items-center  justify-center text-sm text-white rounded-lg  lg:pr-4"
          >
            <FaBars onClick={toggleDrawer} className="w-6 h-6 "></FaBars>
          </button>
        </div>
      </div>
      <div className="z-50 lg:hidden block">
        <Sidebar
          cookies={cookies}
          handleBodyScroll={handleBodyScroll}
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}

export default Header;
