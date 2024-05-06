import Image from "next/image";
import React from "react";

const WhiteCard = () => {
  return (
    <div className="bg-white shadow-xl w-64 absolute top-[24%] -left-[30%] p-7  rounded-[27px]">
      <div className="relative">
        <Image
          src="/img/spark.svg"
          width={100}
          height={50}
          alt="Hero"
          className="absolute top-[-46px] -left-10"
        />
        <h6 className="text-[54px] font-medium font-sans ">40%</h6>
      </div>

      <p className="text-[#828282] text-lg font-medium leading-6">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
};

export default WhiteCard;
