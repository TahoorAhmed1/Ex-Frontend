import React, { useState } from "react";

function TextArea({name,placeholder,required,className,register, addclass, errors}) {
  return (
    <div className="flex flex-col gap-2 mb-2">
        <div className={className ? className :` ${addclass} p-3 bg-gray-100 w-full flex justify-between items-center text-base capitalize  rounded-lg `}>
            <textarea
                name={name}
                placeholder={placeholder}
                required={required}
                {...register(name)}
                className="placeholder:text-[#B6B6B6] text-[#000] bg-gray-100 min-h-[300px] w-full outline-none focus:ring-0 focus:outline-0"
            />
        </div>
        {errors && 
            <p className="text-sm text-red-500">{errors[name]}</p>
        }
    </div>
  );
}

export default TextArea;
