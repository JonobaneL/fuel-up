"use client";
import { getFiltersInfo } from "@/actions/filters";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import { useQueries } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { filtersCombiteCallback } from "@/utils/filtersCombine";

const ActiveFilters = () => {
  const { params, clearSearchParams, removeParam } = useSearchParamsContext();
  const paramsQueries = useQueries({
    queries: Object.keys(params).map((key) => ({
      queryKey: ["searchParam", key, params[key]],
      queryFn: async () => {
        return getFiltersInfo(key, params[key]);
      },
    })),
    combine: (response) => filtersCombiteCallback(response, params),
  });
  if (Object.keys(params).length == 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        className="rounded-full border-primary px-3 py-2 font-normal text-primary leading-4 h-fit hover:text-primary"
        onClick={() => clearSearchParams()}
        disabled={paramsQueries?.pending}
      >
        Скинути
      </Button>
      {paramsQueries.data.map((item, index) => (
        <Button
          variant="outline"
          key={index}
          className="px-3 py-2 gap-1.5 rounded-full font-normal h-fit"
          onClick={() => removeParam(item.paramName || "", item.slug)}
          disabled={paramsQueries?.pending}
        >
          <p className="text-primary text-sm leading-4">
            {item.name}
            {item.paramName == "price" && "грн."}
          </p>
          <img className="size-3" src="/close-icon.svg" alt="close" />
        </Button>
      ))}
    </div>
  );
};

export default ActiveFilters;
