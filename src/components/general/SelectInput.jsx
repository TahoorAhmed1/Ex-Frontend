import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function SelectInput({
  name,
  type,
  placeholder,
  required,
  className,
  register,
  addclass,
  errors,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-[2px] ">
      <div
        className={
          className
            ? className
            : `   w-full flex justify-between items-center text-base capitalize  bg-gray-100  rounded-lg `
        }
      >
        <input
          type={""}
          name={name}
          placeholder={placeholder}
          required={required}
          {...register(name)}
          option={{}}
          className={`placeholder:text-[#B6B6B6] ${addclass}  px-5 py-3  rounded-lg  w-full text-[#000] bg-gray-100 outline-none focus:ring-0 focus:outline-0    `}
        />
        {type == "password" &&
          (show ? (
            <AiOutlineEye onClick={() => setShow(!show)} />
          ) : (
            <AiOutlineEyeInvisible onClick={() => setShow(!show)} />
          ))}
      </div>
      {errors && <p className="text-sm text-red-500">{errors[name]}</p>}
    </div>
  );
}

export default SelectInput;
