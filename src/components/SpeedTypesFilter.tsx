"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { ParamProps } from "@/models/paramsTypes";
import { useSearchParamsContext } from "@/context/SearchParamsContext";

type FilterProps = {
  data: ParamProps[];
};

const SpeedTypesFilter = ({ data }: FilterProps) => {
  const { params, updateParam } = useSearchParamsContext();

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
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default SpeedTypesFilter;
