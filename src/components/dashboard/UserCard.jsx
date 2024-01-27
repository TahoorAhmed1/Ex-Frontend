/** @format */

import { profileImage, logout } from "@/assets";
import { useStateContext } from "@/context/userContext";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const UserCard = ({ user }) => {
  const router = useRouter();
  const { LogOutUser } = useStateContext();
  const handleSigout = () => {
    deleteCookie("token");
    LogOutUser();
    router.push("/");
  };
  return (
    <div className="border w-full rounded-lg overflow-hidden shadow-lg">
      <div className="bg-web_light_green flex items-center justify-between py-5 sm:px-5 px-4">
        <div className="flex sm:gap-4 gap-2 items-center">
          <Image
            src={user?.picture || profileImage}
            alt="user-avatar"
            width={1000}
            height={1000}
            className="sm:w-20 w-16 sm:h-20 h-16 rounded-full border border-black shadow-xl object-cover object-top"
          />
          {user && (
            <div>
              <h4 className="sm:text-2xl text-xl font-bold">
                {user?.firstName?.slice(0, 1).toUpperCase() +
                  user?.firstName?.slice(1)}{" "}
                {user?.lastName?.slice(0, 1).toUpperCase() +
                  user?.lastName?.slice(1)}
              </h4>
              {/* <p className="text-sm font-medium ">UserID #512512</p> */}
            </div>
          )}
        </div>
        <div className=" relative group">
          <Image
            src={logout}
            alt="user-avatar"
            className="sm:w-6 w-5 sm:h-6 h-5 cursor-pointer"
            onClick={handleSigout}
          />
          <p className="hidden group-hover:block absolute -left-14 -bottom-[40px] rounded-md py-2 px-4 text-white text-sm bg-red-600 w-[90px]">
            Sign Out
          </p>
        </div>
      </div>

      <div className="bg-web_darkgreen sm:px-5 px-4 py-3 flex items-center justify-between ">
        <p className="font-medium sm:text-base text-sm text-white">
          Total Donations
        </p>
        <p className="sm:text-2xl text-xl font-bold text-white">
          ${user?.donations?.amount || 0}
          <span
            onClick={() => router.push("/dashboard/payment")}
            className="text-primaryBrown font-extrabold text-[22px] sm:text-[26px] cursor-pointer"
          >
            {user?.donations?.amount > 0 && "+"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
