"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { ParamProps } from "@/models/paramsTypes";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

type FilterProps = {
  data: ParamProps[];
};

const SpeedTypesFilter = ({ data }: FilterProps) => {
  // const { params, updateParam } = useSearchParamsContext();
  const { updateFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);
  return (
    <AccordionItem value="speedType">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Тип по швидкодії
      </AccordionTrigger>
      <AccordionContent className="px-2">
        <CheckboxList
          data={data}
          maxLimit={100}
          checked={filters.speedType || []}
          callback={(value) => updateFilter("speedType", value)}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default SpeedTypesFilter;
