"use client";
import { getFiltersInfo } from "@/actions/filters";
import { useTestContext } from "@/context/testContext";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const ActiveFilters = () => {
  const { params, clearSearchParams, removeParam } = useTestContext();
  const allParams = useMemo(() => {
    const converted = Object.keys(params).map((key) => {
      return params[key].map((param) => ({ param: key, value: param }));
    });
    return converted.flat();
  }, [params]);

  if (allParams.length == 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {allParams.map((item, index) => (
        <div
          key={index}
          className="border w-fit px-2 py-1 h-8 flex items-center gap-2 rounded-full cursor-pointer"
          onClick={() => removeParam(item.param, item.value)}
        >
          <p className="text-primary text-sm">{item.value}</p>
          <img className="size-3" src="/close-icon.svg" alt="close" />
        </div>
      ))}
      <div
        className="border border-primary text-primary w-fit text-sm px-2 py-1 flex items-center rounded-full cursor-pointer"
        onClick={() => clearSearchParams()}
      >
        Очистити все
      </div>
    </div>
  );
};

export default ActiveFilters;
