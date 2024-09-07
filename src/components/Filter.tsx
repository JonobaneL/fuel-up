"use client";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";
import { FiltersKeys } from "@/models/filtersTypes";
import { ParamProps } from "@/models/paramsTypes";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";

type FilterProps = {
  title: string;
  paramName: FiltersKeys;
  data: ParamProps[];
};

const Filter = ({ paramName, title, data }: FilterProps) => {
  const { updateFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);
  return (
    <AccordionItem value={paramName}>
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="px-2 max-h-[25rem] overflow-y-auto">
        <CheckboxList
          data={data}
          maxLimit={15}
          checked={filters[paramName] || []}
          callback={(value) => updateFilter(paramName, value)}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default Filter;
