import { covered_font } from "@/app/fonts";
import React from "react";

const Heading = ({ title }) => {
  return (
    <h4 className={`${covered_font.className} text-4xl text-[#2DA950]`}>
      {title}
    </h4>
  );
};

export default Heading;
