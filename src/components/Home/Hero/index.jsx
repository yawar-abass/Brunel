import Image from "next/image";
import React from "react";
import WhiteCard from "./WhiteCard";
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className=" my-20  ">
      <Heading />
      <div className="flex pt-28 justify-center gap-20 mb-20 ">
        <div className="relative">
          <Image
            src="/img/hero.png"
            width={500}
            quality={100}
            height={500}
            alt="Hero"
          />
          <WhiteCard />
          <div className="h-20 shadow-lg w-64 rounded-full flex items-center  absolute  top-[78%] -left-[12%] bg-white ">
            <Image
              src="/img/jet.png"
              width={50}
              height={50}
              alt="Hero"
              className="m-3"
            />
            <div className="py-3">
              <h4 className="text-xl font-bold ">10 DAYS</h4>
              <p className="text-[#828282] font-medium">Staff Deployment</p>
            </div>
          </div>
        </div>
        <div>Right carousel</div>
      </div>
    </div>
  );
};

export default Hero;
