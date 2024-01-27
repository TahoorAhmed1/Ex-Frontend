/** @format */

import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

function Button({
  name,
  type,
  className,
  handleClick,
  newClass,
  loader,
  disabled,
  customClass,
}) {
  return (
    <div className={customClass}>
      <button
        type={type}
        disabled={disabled}
        className={
          newClass
            ? newClass
            : `text-white transition font-medium md:text-lg text-base bg_gradient_button md:py-2.5 shadow_2xl md:px-8 py-2 px-6 rounded-md flex justify-center items-center gap-2 ${className}`
        }
        onClick={handleClick}
      >
        {loader && <RiLoader4Fill size={20} className="animate-spin" />}
        {name}
      </button>
    </div>
  );
}

export default Button;
