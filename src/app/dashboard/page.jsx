/** @format */

"use client";
import { API } from "@/api";
import { profileImage } from "@/assets";
import ChangePassword from "@/components/dashboard/ChangePasswordForm";
import UserCard from "@/components/dashboard/UserCard";
import UserInfoForm from "@/components/dashboard/UserInfoForm";
import Button from "@/components/general/Button";
import Input from "@/components/general/Input";
import { useStateContext } from "@/context/userContext";
import { notify } from "@/utils/notify";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa6";

const page = () => {
  const { SaveUser, user, setUser } = useStateContext();
  const fileInputRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState();
  const getUser = async () => {
    try {
      const res = await API.getUser();
      SaveUser(res?.data?.data);
      setUser(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateImage = async () => {
    if (image) {
      try {
        setLoader(true);
        const data = new FormData();
        data.append("profilePicture", image);
        const res = await API.upload(data);
        const res2 = await API.updateUser({ picture: res?.data?.data[0] });
        notify("success", res2?.data?.message);
        getUser();
      } catch (error) {
        notify("error", error?.response?.data?.message || error?.message);
      } finally {
        setLoader(false);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-full relative">
      <div className="absolute max-w-[230px] max-h-[200px] top-0 right-0 bg-cover bg-no-repeat bg-center bg_profile_design"></div>

      <div className="dashboard_container h-full pt-8 xl:pt-10 w-full grid grid-cols-1 md:grid-cols-2 place-content-center pb-6 gap-8">
        <div className="w-full  max-w-[550px] place-self-center md:place-self-start">
          <UserCard user={user} />
        </div>

        <div className=" md:row-span-2 place-self-center w-full max-w-[400px]">
          <div className="flex flex-col gap-4 sm:gap-8  w-full  ">
            <div
              className={`self-center relative cursor-pointer`}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => fileInputRef.current.click()}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full flex bg_gradient_black justify-center rounded-lg ${
                  !hover && "hidden"
                } items-center`}
              >
                <FaCamera size={40} />
              </div>
              <Image
                alt="abc"
                src={
                  (image && URL.createObjectURL(image)) ||
                  user?.picture ||
                  profileImage
                }
                className="max-w-[250px] h-[250px] object-cover object-top rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
            <Input
              type={"file"}
              className={"hidden"}
              register={() => {}}
              onchange={(e) => {
                e?.target?.files?.length && setImage(e?.target?.files[0]);
              }}
              refrence={fileInputRef}
            />
            <Button
              newClass={
                " w-full transition text-green-text flex justify-center items-center gap-3 font-medium text-lg border border-green-border py-2.5 shadow-2xl  px-8 rounded-md hover:bg-green-background cursor-pointer hover:text-white"
              }
              loader={loader}
              handleClick={updateImage}
              name={"Update Picture"}
            />
          </div>
        </div>
        <div className="w-full max-w-[550px] place-self-center md:place-self-start">
          <UserInfoForm user={user} getUser={getUser} />
        </div>
        <div className="w-full max-w-[550px] place-self-center md:place-self-start">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default page;
