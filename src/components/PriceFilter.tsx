"use client";
import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { useSearchParamsContext } from "@/context/searchParamsContext";
import PriceInput from "./PriceInput";

const PriceFilter = () => {
  //fetch min and max price
  const minPrice = 50;
  const maxPrice = 4650;
  const { params, updateParam, removeParam } = useSearchParamsContext();

  const initialPriceRange =
    params?.price?.length > 0
      ? params?.price[0]?.split("-").map(Number)
      : [minPrice, maxPrice];

  const [price, setPrice] = useState(initialPriceRange);
  useEffect(() => {
    setPrice(initialPriceRange);
  }, [params?.price]);

  const sliderSubmitHandler = (data: number[]) => {
    if (data[0] == minPrice && data[1] == maxPrice) {
      if (params?.price) removeParam("price", params?.price[0] || "");
      return;
    }
    updateParam(
      "price",
      data.map((item) => item.toString())
    );
  };
  return (
    <>
      <PriceInput
        minPrice={minPrice}
        maxPrice={maxPrice}
        price={price}
        setPrice={setPrice}
      />
      <Slider
        defaultValue={[minPrice, maxPrice]}
        value={price}
        max={maxPrice}
        step={1}
        min={minPrice}
        onValueChange={(data) => {
          setPrice(data);
        }}
        onValueCommit={sliderSubmitHandler}
      />
    </>
  );
};

export default PriceFilter;
