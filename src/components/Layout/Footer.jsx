import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-20 mb-6 flex justify-between bg-[#F5F5F5] py-10 px-10 items-center rounded-[40px]">
      <p className="font-medium flex items-center text-lg">
        <span className="pr-2 text-2xl">©</span> Talup 2023. All rights reserved
      </p>
      <div className="space-x-10">
        <Link
          href=""
          className="text-[#1C1C1C] font-medium underline underline-offset-1 underline-[#1C1C1C]"
        >
          Terms & Conditions
        </Link>
        <Link
          href=""
          className="text-[#1C1C1C] font-medium underline underline-offset-1 underline-[#1C1C1C]"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
