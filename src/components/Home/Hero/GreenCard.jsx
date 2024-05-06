import Image from "next/image";
import React from "react";

const GreenCard = () => {
  return (
    <div className="bg-[#002E18] shadow-xl w-64 absolute top-[24%] -left-[30%] p-7  rounded-[27px]">
      <h6 className="text-[54px] font-medium font-sans ">$0.5</h6>

      <p className="text-[#828282] text-lg font-medium leading-6">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
};

export default GreenCard;
