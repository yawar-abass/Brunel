import React from "react";
import { covered_font } from "@/app/fonts";

const Heading = () => {
  return (
    <div className="flex  justify-center items-center flex-col w-full mx-auto">
      <p className={`${covered_font.className} text-4xl text-[#2DA950]`}>
        Success stories
      </p>
      <h1 className="text-[56px] text-center font-medium leading-[120%]">
        Every success journey <br /> we’ve encountered.
      </h1>
    </div>
  );
};

export default Heading;
