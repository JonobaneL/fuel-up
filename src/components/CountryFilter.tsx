"use client";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { ParamProps } from "@/models/paramsTypes";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

type FilterProps = {
  data: ParamProps[];
};

const CountryFilter = ({ data }: FilterProps) => {
  const { params, updateParam } = useSearchParamsContext();
  const { updateFilter } = useFilters();
  const filters = useTypeSelector((state) => state.filters);
  return (
    <AccordionItem value="country">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Країна виробник
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3">
        <CheckboxList
          data={data}
          callback={(value) => updateFilter("country", value)}
          checked={filters.country || []}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default CountryFilter;
