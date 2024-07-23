"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

const PriceFilter = () => {
  const minPrice = 50;
  const maxPrice = 4650;
  const pattern = /^\d+$/;

  const [price, setPrice] = useState([minPrice, maxPrice]);
  const minOnChange = (value: string) => {
    value.match(pattern)
      ? setPrice((p) => [parseInt(value), p[1]])
      : setPrice((p) => [parseInt(value.replace(/\D/g, "")), p[1]]);
  };
  const maxOnChange = (value: string) => {
    value.match(pattern)
      ? setPrice((p) => [p[0], parseInt(value)])
      : setPrice((p) => [p[0], parseInt(value.replace(/\D/g, ""))]);
  };
  const onBlurHandler = (value: string, type: string) => {
    const convertedValue =
      parseInt(value) < minPrice
        ? minPrice
        : parseInt(value) > maxPrice
        ? maxPrice
        : parseInt(value);
    if (type == "min") {
      setPrice((p) => [convertedValue, p[1]]);
    } else {
      setPrice((p) => [p[0], convertedValue]);
    }
  };
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Input
          value={price[0]}
          onChange={(e) => minOnChange(e.target.value)}
          onBlur={(e) => onBlurHandler(e.target.value, "min")}
          className="w-20 rounded-sm focus-visible:ring-0 text-center"
          placeholder="min"
        />
        —
        <Input
          value={price[1]}
          onChange={(e) => maxOnChange(e.target.value)}
          onBlur={(e) => onBlurHandler(e.target.value, "max")}
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
