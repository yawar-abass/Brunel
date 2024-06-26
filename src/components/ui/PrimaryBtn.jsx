import React from "react";

const PrimaryBtn = ({ children, className }) => {
  return (
    <button
      className={`${className} h-16 bg-black text-white rounded-full  w-48 hover:bg-gradient-to-r hover:bg-[#4E4E4E]  transition-all ease-out duration-300`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
