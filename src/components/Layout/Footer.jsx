import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-20 mx-2 mb-6 flex flex-col md:flex-row justify-between bg-[#F5F5F5] py-10 px-10 items-center rounded-[40px]">
      <p className="font-medium flex items-center text-lg">
        <span className="md:pr-2 md:text-2xl">©</span> Talup 2023. All rights
        reserved
      </p>
      <div className="md:space-x-10 space-x-3">
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
