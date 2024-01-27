/** @format */

import { internativeLogo, logo } from "@/assets";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#131921]">
      <div className="container flex flex-col lg:flex-row lg:space-y-0 space-y-8 justify-between  py-20">
        <div className="flex flex-col gap-4 lg:gap-8 ">
          <a href="/" className="cursor-pointer w-[180px]">
            <Image src={logo} alt="logo" />
          </a>

          <p className="mb-6 text-sm text-[#D4D4D4] lg:text-base lg:w-[380.285px] w-full">
            Expedition Orange is a 501(c)(3) EIN#: 81-4984142 charitable
            veterans&apos; organization. All donations are tax deductible.
          </p>
          <div className="space-x-5 text-white flex text-center">
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
        </div>

        <div className="flex text-[#D4D4D4] lg:justify-center">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-lg font-medium capitalize  lg:text-xl">
              Quick Links
            </h1>
            <div className="grid grid-cols-2 gap-x-5 text-white   text-[14px] text-sm lg:text-base">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <Link
                    href={"/our-mission"}
                    className="hover:text-primaryBrown "
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/photo-gallery"}
                    className="hover:text-primaryBrown "
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href={"/journal"} className="hover:text-primaryBrown ">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href={"/sponsor"} className="hover:text-primaryBrown ">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/ways-to-donate"}
                    className="hover:text-primaryBrown "
                  >
                    Ways To Donate
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-4">
                <li>
                  <Link
                    href={"/resources"}
                    className="hover:text-primaryBrown "
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href={"/events"} className="hover:text-primaryBrown ">
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact-us"}
                    className="hover:text-primaryBrown "
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/share-your-story"}
                    className="hover:text-primaryBrown "
                  >
                    Share your Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[#D4D4D4] lg:gap-6">
          <h2 className="text-lg font-medium text-white lg:text-xl">
            Contact Us
          </h2>

          <div className="space-y-4">
            {/* <div className="flex hover:text-primaryBrown transition gap-2 items-center">
              <i>
                <IoLocationSharp className="w-5 h-5" />
              </i>
              <a href="https://expeditionorange.com/" target="_blank">
                expeditionorange.com
              </a>
            </div> */}
            <a
              href="mailto:info@expeditionorange.org"
              className="flex hover:text-primaryBrown transition gap-2 items-center"
            >
              <HiOutlineMail className="w-5 h-5" />
              <p>info@expeditionorange.org</p>
            </a>
          </div>

          <div className="space-y-4">
            {/* <div className="flex hover:text-primaryBrown transition gap-2 items-center">
              <i>
                <IoLocationSharp className="w-5 h-5" />
              </i>
              <a href="https://expeditionorange.com/" target="_blank">
                expeditionorange.com
              </a>
            </div> */}
            <p className="flex hover:text-primaryBrown transition gap-2 items-center">
              <HiOutlineLocationMarker className="w-5 h-5" />
              <p>Expedition Orange P.O. Box 542 Lisbon, MD 21765</p>
            </p>
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:justify-between justify-center  border-t-2 border-[#767676] py-[20px] text-white gap-4 container">
        <Link href={"https://www.internativelabs.com"}>
          <Image
            src={internativeLogo}
            height={1000}
            width={1000}
            className="h-10 w-60"
          />
        </Link>
        <p className="text-[#D4D4D4] mt-2 ">
          Copyright © 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
