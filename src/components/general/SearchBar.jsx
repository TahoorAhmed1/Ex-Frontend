import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";

export const SearchBar = ({
  handleClick,
  text,
  setText,
  classname,
  placeholder,
  buttonName,
}) => {
  return (
    <div
      className={`flex items-center py-2 px-3 gap-2 border border-gray-300 rounded-lg ${classname}`}
    >
      <div className="flex flex-1 gap-2">
        <AiOutlineSearch size={25} color="#8F8F8F" />
        <input
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e?.target?.value)}
          className="outline-none w-full focus:ring-0 focus:outline-0 placeholder:text-[#B6B6B6]"
        />
      </div>
      <Button
        name={buttonName}
        handleClick={handleClick}
        newClass={
          " text-white font-medium text-lg bg_gradient_button md:py-2.5 shadow_2xl md:px-8 rounded-md py-2 px-4 md:text-base text-sm"
        }
      />
    </div>
  );
};
