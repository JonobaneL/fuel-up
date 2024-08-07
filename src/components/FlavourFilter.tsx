"use client";
import { flavours } from "@/data/filters";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import CheckboxList from "./ui/CheckboxList";
import { useQueryParams } from "@/hooks/useQueryParams";
import { ParamProps } from "@/models/paramsTypes";

type FilterProps = {
  data: ParamProps[];
};

const FlavourFilter = ({ data }: FilterProps) => {
  const [filter, setFilter] = useQueryParams("flavour");
  const handler = (value: string) => {
    setFilter((p) => {
      if (p.includes(value)) return p.filter((item) => item != value);
      return [...p, value];
    });
  };
  return (
    <AccordionItem value="flavor">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Смак
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3 max-h-[24rem] overflow-auto">
        <CheckboxList
          data={data}
          maxLimit={15}
          checked={filter}
          callback={handler}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default FlavourFilter;
