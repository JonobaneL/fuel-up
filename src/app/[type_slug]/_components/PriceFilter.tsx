"use client";

import { useEffect, useMemo, useState } from "react";

import PriceInput from "./PriceInput";

import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

import { Slider } from "@/components/ui/slider";

const PriceFilter = () => {
  //fetch min and max price
  const minPrice = 50;
  const maxPrice = 4650;
  const { updateFilter, removeFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);

  const initialPriceRange = useMemo(() => {
    if (filters?.price) return filters?.price[0]?.split("-").map(Number);
    return [minPrice, maxPrice];
  }, [filters?.price]);

  const [price, setPrice] = useState(initialPriceRange);

  useEffect(() => {
    setPrice(initialPriceRange);
  }, [filters?.price, initialPriceRange]);

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
