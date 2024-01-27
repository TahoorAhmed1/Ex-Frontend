"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const path = usePathname();
  const data = [
    { ref: "/", name: "Home" },
    { ref: "/our-mission", name: "Our Mission" },
    { ref: "/photo-gallery", name: "Photo Gallery" },
    { ref: "/journal", name: "Journal" },
    { ref: "/sponsor", name: "Sponsors" },
    { ref: "/ways-to-donate", name: "Ways To Donate" },
    { ref: "/resources", name: "Resources" },
    { ref: "/events", name: "Events" },
    { ref: "/contact-us", name: "Contact Us" },
    { ref: "/share-your-story", name: "Share your Story" },
  ];
  return (
    <nav className="py-6  w-full bg_gradient_brown lg:block hidden ">
      <ul className="flex flex-wrap justify-between gap-5  container w-full items-center text-white xl:text-[18px] text-[16px]">
        {data?.map((i, index) => {
          return (
            <li
              key={index}
              className={`fade-in transition ${
                path == i?.ref && "text-black"
              } hover:text-black hover:-translate-y-[2px] `}
            >
              {" "}
              <Link href={i?.ref}>{i?.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
