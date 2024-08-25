"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { ParamProps } from "@/models/paramsTypes";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import { useTypeDispatch, useTypeSelector } from "@/hooks/useTypedReduxHooks";
import { updateFilters } from "@/store/reducers/FiltersSlice";

type FilterProps = {
  data: ParamProps[];
};

const SpeedTypesFilter = ({ data }: FilterProps) => {
  const { params, updateParam } = useSearchParamsContext();
  // const { filters } = useTypeSelector((state) => state.filters);
  // const dispatch = useTypeDispatch();

  return (
    <AccordionItem value="speedType">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Тип по швидкодії
      </AccordionTrigger>
      <AccordionContent className="px-2">
        <CheckboxList
          data={data}
          maxLimit={100}
          checked={params.speedType || []}
          callback={(value) => updateParam("speedType", value)}
          // callback={(value) => {
          //   console.log(value);
          //   dispatch(updateFilters({ paramName: "speedType", value }));
          // }}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default SpeedTypesFilter;
