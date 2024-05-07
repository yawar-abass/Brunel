import React from "react";
import Image from "next/image";
import { covered_font } from "@/app/layout";
import Faqs from "./Faqs";

const QuestionsComponent = () => {
  return (
    <div className="bg-[#E8EEE7] xl:mx-20 rounded-[40px] mb-10 mt-40 flex ">
      <div className="w-1/2">
        <div className="p-20">
          <h4
            className={`${covered_font.className} leading-[110%] text-3xl text-[#9E9D9D]`}
          >
            What’s on your mind
          </h4>
          <h3 className="text-[60px] leading-[110%] text-[#1C1C1C] font-semibold">
            Ask Questions
          </h3>
        </div>
        <div className="px-1">
          <Image
            src="/img/Union.png"
            alt="Brute"
            width={400}
            height={300}
            className="w-fit h-fit"
          />
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-center">
        <Faqs />
      </div>
    </div>
  );
};

export default QuestionsComponent;
