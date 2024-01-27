"use client";
import FormImg from "@/components/auth/FormImg";
import Input from "@/components/general/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "@/validation";
import { useRouter } from "next/navigation";
import { notify } from "@/utils/notify";
import { API } from "@/api";
import { setCookie } from "cookies-next";
import Button from "../general/Button";
import Link from "next/link";
import { useState } from "react";
import { useStateContext } from "../../context/userContext";
function Login() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const { SaveUser } = useStateContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema.loginValidation),
  });

  const getUser = async () => {
    try {
      const res = await API.getUser();
      console.log(res?.data?.data, "res....");
      SaveUser(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = async (data) => {
    try {
      setLoader(true);
      const res = await API.login(data);
      if (res) {
        setCookie("token", res?.data?.data?.token);
        await getUser();
        notify("success", res?.data?.message);
        reset();
        router.push("/dashboard");
      }
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      notify("error", message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen py-10 bg-white">
      <div className="container grid lg:grid-cols-2 grid-cols-1  lg:gap-14 gap-8  ">
        <div className="flex flex-col justify-center lg:order-first order-last ">
          <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
            <Input
              name={"email"}
              placeholder={"Email Address"}
              type={"text"}
              register={register}
              errors={{ email: errors?.email?.message }}
            />

            <Input
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              register={register}
              errors={{ password: errors?.password?.message }}
            />
            <div className="w-full">
              <Button name={"Login"} className={"w-full"} loader={loader} />
            </div>
          </form>
          <Link href={"/forgetPassword"}>
            <p className="text-[#B6B6B6] mt-5  font-semibold text-sm  text-right">
              Forgot Password?
            </p>
          </Link>
          <div className=" text-center">
            {/* <button className="text-white font-medium w-full bg-[#E2402F] py-2.5 px-8 rounded mt-6">
                Sign in with Google
              </button> */}
            <p className="text-sm text-[#B6B6B6] mt-6  font-semibold">
              Don’t have an account{" "}
              <Link
                className="text-[#C05E2B]  font-semibold text-base"
                href="/signup"
              >
                sign up!
              </Link>
            </p>
          </div>
        </div>

        <FormImg title={"Login to Donate"} />
      </div>
    </div>
  );
}

export default Login;
