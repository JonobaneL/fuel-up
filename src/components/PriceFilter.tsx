"use client";
import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import PriceInput from "./PriceInput";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

const PriceFilter = () => {
  //fetch min and max price
  const minPrice = 50;
  const maxPrice = 4650;
  const { updateFilter, removeFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);

  const initialPriceRange = filters?.price
    ? filters?.price[0]?.split("-").map(Number)
    : [minPrice, maxPrice];

  const [price, setPrice] = useState(initialPriceRange);
  useEffect(() => {
    setPrice(initialPriceRange);
  }, [filters?.price]);

  const sliderSubmitHandler = (data: number[]) => {
    if (data[0] == minPrice && data[1] == maxPrice) {
      if (filters?.price) removeFilter("price", filters?.price[0] || "");
      return;
    }
    updateFilter(
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
