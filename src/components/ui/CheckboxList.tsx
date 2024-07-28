"use client";
import { useState } from "react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

type ListProps = {
  data: string[];
  maxLimit: number;
  callback?: (value: any) => void;
};

const CheckboxList = ({
  data,
  maxLimit,
  callback = (value) => {},
}: ListProps) => {
  const [limit, setLimit] = useState(maxLimit);
  const limitHandler = () => {
    limit == data.length ? setLimit(maxLimit) : setLimit(data.length);
  };
  return (
    <div className="space-y-3">
      {data.map(
        (item, index) =>
          index <= limit && (
            <Label key={index} className="flex items-center gap-2 w-fit">
              <Checkbox
                className="size-5"
                onCheckedChange={() => callback(item)}
              />
              {item}
            </Label>
          )
      )}
      {maxLimit < data.length && (
        <p
          onClick={limitHandler}
          className="underline text-primary cursor-pointer"
        >
          {limit == data.length ? "Згорнути" : "Показати більше"}
        </p>
      )}
    </div>
  );
};

export default CheckboxList;
