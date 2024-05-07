"use client";

import React from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="py-4 w-full  border-b-2 border-[#D7D7D7] ">
      <div
        className="flex space-x-24 justify-between items-center cursor-pointer  transition-all duration-500 ease-in-out"
        onClick={onClick}
      >
        <h2 className="text-xl font-semibold">{question}</h2>{" "}
        <span className="text-4xl">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500   ease-in-out ${
          isOpen ? "max-h-[1000px] pt-4" : "max-h-0"
        }`}
        aria-hidden={!isOpen}
      >
        <p
          className={`opacity-${
            isOpen ? "100" : "0"
          } transition-opacity duration-300 text-[15px] text-[#617275]`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
