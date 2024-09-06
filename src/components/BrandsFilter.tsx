"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import CheckboxList from "./ui/CheckboxList";
import { useState } from "react";
import { useRequest } from "@/hooks/useRequest";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import { useQuery } from "@tanstack/react-query";
import { getBrands } from "@/actions/paramsActions";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

const BrandsFilter = () => {
  const [search, setSearch] = useState<string>("");
  const query = useRequest(search);
  // const { params, updateParam } = useSearchParamsContext();
  const { updateFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);

  const { data: brands } = useQuery({
    queryKey: ["brands", query],
    queryFn: async () => {
      return getBrands(query);
    },
    initialData: [],
  });
  return (
    <AccordionItem value="brands">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Бренди
      </AccordionTrigger>
      <AccordionContent className="px-2 max-h-[25rem] overflow-auto">
        <Input
          className="mt-1 mb-4"
          placeholder="Пошук бренду"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CheckboxList
          data={brands}
          maxLimit={15}
          checked={filters.brand || []}
          callback={(value) => updateFilter("brand", value)}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default BrandsFilter;
