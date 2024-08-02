"use client";
import { ParamProps } from "@/models/paramsTypes";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import CheckboxList from "./ui/CheckboxList";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useState } from "react";
import { useAsync } from "@/hooks/useAsync";
import { useQuery } from "@/hooks/useQuery";

const BrandsFilter = () => {
  const [filter, setFilter] = useQueryParams("brands");
  const [search, setSearch] = useState<string>("");
  const query = useQuery(search);
  const handler = (value: string) => {
    setFilter((p) => {
      if (p.includes(value)) return p.filter((item) => item != value);
      return [...p, value];
    });
  };
  const [isLoading, _, brands] = useAsync<ParamProps[]>(
    () => fetch(`/brands?name=${query}`),
    [query]
  );
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
          data={brands || []}
          maxLimit={15}
          checked={filter}
          callback={handler}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default BrandsFilter;
