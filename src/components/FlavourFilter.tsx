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

const FlavourFilter = ({ data }: FilterProps) => {
  const { params, updateParam } = useSearchParamsContext();

  return (
    <AccordionItem value="flavor">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Смак
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3 max-h-[24rem] overflow-auto">
        <CheckboxList
          data={data}
          maxLimit={15}
          checked={params.flavour || []}
          callback={(value) => updateParam("flavour", value)}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default FlavourFilter;
