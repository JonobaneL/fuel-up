"use client";
import { getFiltersInfo } from "@/actions/filters";
import { useQueries } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { filtersCombiteCallback } from "@/utils/filtersCombine";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";
import { FiltersKeys } from "@/models/filtersTypes";

const ActiveFilters = () => {
  const { clearFilters, removeFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);
  const paramsQueries = useQueries({
    queries: Object.keys(filters).map((key) => ({
      queryKey: ["searchParam", key, filters[key as FiltersKeys]],
      queryFn: async () => {
        return getFiltersInfo(key, filters[key as FiltersKeys] || []);
      },
    })),
    combine: (response) => filtersCombiteCallback(response, filters),
  });
  if (Object.keys(filters).length == 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        className="rounded-full border-primary px-3 py-2 font-normal text-primary leading-4 h-fit hover:text-primary"
        onClick={() => clearFilters()}
        disabled={paramsQueries?.pending}
      >
        Скинути
      </Button>
      {paramsQueries.data.map((item, index) => (
        <Button
          variant="outline"
          key={index}
          className="px-3 py-2 gap-1.5 rounded-full font-normal h-fit"
          onClick={() => removeFilter(item.paramName as FiltersKeys, item.slug)}
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
