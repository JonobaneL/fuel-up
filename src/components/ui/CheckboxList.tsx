"use client";
import { useState } from "react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { ParamProps } from "@/models/paramsTypes";

type ListProps = {
  data: Required<ParamProps>[];
  maxLimit?: number;
  checked?: string[];
  callback?: (value: any) => void;
};

const CheckboxList = ({
  data,
  maxLimit = 100,
  checked = [],
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
            <Label
              key={item?.id}
              className="flex items-center gap-2 w-fit cursor-pointer leading-2"
            >
              <Checkbox
                className="size-5"
                checked={checked.includes(item.slug)}
                onCheckedChange={() => callback(item.slug)}
              />
              {item.name}
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
