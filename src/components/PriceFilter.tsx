"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

const PriceFilter = () => {
  const [price, setPrice] = useState([50, 4650]);
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Input
          value={price[0]}
          className="w-20 rounded-sm focus-visible:ring-0 text-center"
          placeholder="min"
        />
        —
        <Input
          value={price[1]}
          className="w-20 rounded-sm focus-visible:ring-0 text-center"
          placeholder="max"
        />
        грн
      </div>
      <Slider
        defaultValue={[50, 4650]}
        value={price}
        max={4650}
        step={1}
        min={50}
        onValueChange={(data) => setPrice(data)}
      />
    </>
  );
};

export default PriceFilter;
