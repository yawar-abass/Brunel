"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SecondaryBtn = ({ href = "" }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(href);
      }}
      className="h-16 border-2 rounded-full  w-40 hover:bg-gradient-to-r hover:bg-[#EAEAEA]  transition-all ease-out duration-300"
    >
      Get Projects
    </button>
  );
};

export default SecondaryBtn;
