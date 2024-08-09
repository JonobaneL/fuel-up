"use client";
import { ParamProps } from "@/models/paramsTypes";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import CheckboxList from "./ui/CheckboxList";
import { useState } from "react";
import { useAsync } from "@/hooks/useAsync";
import { useQuery } from "@/hooks/useQuery";
import { useTestContext } from "@/context/testContext";

const BrandsFilter = () => {
  const [search, setSearch] = useState<string>("");
  const query = useQuery(search);
  const { params, updateParam } = useTestContext();

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
          checked={params.brand || []}
          callback={(value) => updateParam("brand", value)}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default BrandsFilter;
