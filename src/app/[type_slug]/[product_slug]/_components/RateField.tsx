"use client";

import { useState } from "react";

import { Control, Controller } from "react-hook-form";

import { ReviewFormParams } from "@/types/formParams";

type RateFieldProps = {
  control: Control<ReviewFormParams, any>;
};

const RateField = ({ control }: RateFieldProps) => {
  const [hoverRate, setHoverRate] = useState(5);

  return (
    <Controller
      name="rate"
      control={control}
      render={({ field }) => (
        <div className="flex gap-2">
          <p className="text-third">Ваша оцінка</p>
          <div
            className="flex items-center"
            onMouseLeave={() => setHoverRate(field.value)}
          >
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index}
                  className="size-5 cursor-pointer"
                  onMouseEnter={() => setHoverRate(index + 1)}
                  onClick={() => field.onChange(index + 1)}
                  src={index + 1 > hoverRate ? "/star.svg" : "/star-full.svg"}
                  alt="star"
                />
              ))}
          </div>
        </div>
      )}
    />
  );
};

export default RateField;
