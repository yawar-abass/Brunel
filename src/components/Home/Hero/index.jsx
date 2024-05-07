import Image from "next/image";
import React from "react";
import WhiteCard from "./WhiteCard";
import Heading from "./Heading";
import GreenCard from "./GreenCard";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import CarouselDots from "@/components/ui/CarouselDots";

const Hero = () => {
  return (
    <div className=" my-20 xl:mx-40 ">
      <Heading />
      <div className="flex relative  w-full  flex-wrap pt-28 justify-center gap-20 xl:gap-48 mb-20 bg-[url('/img/hero-right-bg.png')] bg-right-bottom bg-no-repeat  ">
        {/* Left section  */}
        <div className="relative ml-6 ">
          <Image
            src="/img/hero.png"
            width={500}
            quality={100}
            height={500}
            alt="Hero"
          />
          <WhiteCard />
          <div className="h-20 shadow-lg w-[230px] rounded-full flex items-center  absolute  top-[78%] -left-[12%] bg-white ">
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
          <GreenCard />
        </div>
        {/* Right section */}
        <div className="w-1/3 flex flex-wrap  mt-20 flex-col ">
          <h4 className="text-[40px] font-semibold leading-[120%]">
            Enhance fortune 50 company’s insights teams research capabilities
          </h4>

          <CarouselDots className="mt-16" />

          <PrimaryBtn className="mt-28  ">
            Explore More{" "}
            <Image
              src="/img/arrow.svg"
              alt="->"
              width={50}
              height={50}
              className="inline w-6 h-6 pl-2 hover:right-scale-120 transition-all ease-out duration-300"
            />{" "}
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
