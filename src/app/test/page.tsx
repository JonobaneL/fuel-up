"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductCarousel from "@/components/ProductCarousel";
import ProductInfo from "@/components/ProductInfo";
import { useState } from "react";

const Test = () => {
  const [rate, setRate] = useState(0);
  const [isHover, setIsHover] = useState(0);
  return (
    <main className="mb-14 mt-10">
      <div className="flex items-center" onMouseLeave={() => setIsHover(rate)}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <img
              key={index}
              className="size-5 cursor-pointer"
              onMouseEnter={() => setIsHover(index + 1)}
              onClick={() => setRate(index + 1)}
              src={index + 1 > isHover ? "/star.svg" : "star-full.svg"}
            />
          ))}
      </div>
    </main>
  );
};

export default Test;
