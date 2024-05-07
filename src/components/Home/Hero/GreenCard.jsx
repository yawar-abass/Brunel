import Image from "next/image";
import React from "react";

const GreenCard = () => {
  return (
    <div className="bg-[#002E18] shadow-xl md:w-64 md:absolute top-[66%] text-white left-[65%] p-7  rounded-[27px]">
      <h6 className="text-[54px] inline font-medium font-sans ">$0.5</h6>{" "}
      <span className="uppercase text-[22px] font-medium text-[#A6A3A0] pl-2">
        Million
      </span>
      <p className="text-[#CCCCCC] text-md font-medium leading-6">
        Reduced client expenses by saving on hiring and employee costs.
      </p>
    </div>
  );
};

export default GreenCard;
