import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Input({
  name,
  type,
  placeholder,
  required,
  className,
  register,
  addclass,
  errors,
  disabled,
  onchange,
  refrence
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-[2px] ">
      <div
        className={
          className
            ? className
            : `   w-full flex justify-between items-center text-base capitalize bg-gray-100  rounded-lg `
        }
      >
        <input
          ref={refrence}
          type={type == "password" ? (show ? "text" : "password") : type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onchange}
          required={required}
          {...register(name)}
          className={`placeholder:text-[#B6B6B6] ${addclass}  px-5 sm:py-3.5 py-2.5   md:rounded-lg rounded-md w-full text-[#000] bg-gray-100 outline-none focus:ring-0 focus:outline-0    `}
        />
        {type == "password" && !disabled &&
          (show ? (
            <AiOutlineEye
              className="mx-2 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="mx-2 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          ))}
      </div>
      {errors && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
    </div>
  );
}

export default Input;
