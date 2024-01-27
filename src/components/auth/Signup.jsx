"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "@/validation";
import Link from "next/link";
import FormImg from "./FormImg";
import Input from "../general/Input";
import Button from "../general/Button";
import { useState } from "react";
import { notify } from "@/utils/notify";
import { API } from "@/api";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
function Signup() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.signupValidation),
  });
  const [checked, setChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const SubmitForm = async (data) => {
    if (checked) {
      delete data?.confirmPassword;
      try {
        setLoader(true);
        const res = await API.register(data);
        if (res) {
          setCookie("otpToken", res?.data?.data?.token);
          notify("success", res?.data?.message);
          reset();
          router.push("/verify");
        }
      } catch (error) {
        const message = error?.response?.data?.message || error?.message;
        notify("error", message);
      } finally {
        setLoader(false);
      }
    } else {
      notify("error", "Please accept the Terms and Conditions");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen py-10 bg-white">
      <div className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-8">
        <FormImg title={"Sign Up"} />
        <div className="flex flex-col justify-center ">
          <form onSubmit={handleSubmit(SubmitForm)} className="space-y-5">
            <Input
              name={"firstName"}
              placeholder={"First Name"}
              type={"text"}
              register={register}
              errors={{ firstName: errors?.firstName?.message }}
            />

            <Input
              name={"lastName"}
              placeholder={"Last Name"}
              type={"text"}
              register={register}
              errors={{ lastName: errors?.lastName?.message }}
            />

            <Input
              name={"email"}
              placeholder={"Email Address"}
              type={"text"}
              register={register}
              errors={{ email: errors?.email?.message }}
            />

            <Input
              name={"password"}
              placeholder={"Passwords"}
              type={"password"}
              register={register}
              errors={{ password: errors?.password?.message }}
            />

            <Input
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={"password"}
              register={register}
              errors={{ confirmPassword: errors?.confirmPassword?.message }}
            />

            <div className=" flex  items-center gap-2 mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                onChange={() => setChecked(!checked)}
              />
              <div className="mt-[2px] text-[#B6B6B6] text-sm">
                <span>Accept</span>
                <Link
                  href={"/terms-and-conditions"}
                  className="text-primaryBrown font-bold ml-0.5 cursor-pointer"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>

            <div className="w-full">
              <Button name={"Sign Up"} className={"w-full"} loader={loader} />
            </div>
          </form>
          <div className=" text-center">
            {/* <button className="text-white font-medium w-full bg-[#E2402F] py-2.5 px-8 rounded mt-6">
                Sign in with Google
              </button> */}
            <p className="text-sm text-[#B6B6B6] mt-6  font-semibold">
              Already have an account?{" "}
              <Link
                className="text-[#C05E2B]  font-semibold text-base"
                href="/login"
              >
                login!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
