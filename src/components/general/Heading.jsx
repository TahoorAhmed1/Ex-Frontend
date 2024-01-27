import React from "react";

function Heading({ heading, className }) {
  return (
    <h2
      className={`sm:text-[31px] text-[21px] font-semibold text-black ${className}`}
    >
      {heading}
    </h2>
  );
}

export default Heading;
