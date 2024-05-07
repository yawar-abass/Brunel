"use client";
import React, { useState } from "react";
import FAQItem from "../../ui/FaqItem";
import faqs from "@/data/faqs";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="container mx-auto md:px-4   md:py-8">
      <div className="grid grid-cols-1 gap-4 p-6 md:pr-20">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
