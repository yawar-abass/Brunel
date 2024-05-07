import React from "react";

const CarouselDots = ({ className }) => {
  return (
    <div className={`flex  space-x-2 ${className}`}>
      <div className="w-3 h-3 rounded-full dot-green"></div>
      <div className="w-3 h-3 rounded-full dot-gray"></div>
      <div className="w-3 h-3 rounded-full dot-gray"></div>
    </div>
  );
};

export default CarouselDots;
