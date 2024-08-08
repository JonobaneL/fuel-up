"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { ParamProps } from "@/models/paramsTypes";

type FilterProps = {
  data: ParamProps[];
};

const SpeedTypesFilter = ({ data }: FilterProps) => {
  const [filter, setFilter] = useQueryParams("speedType");
  const handler = (value: string) => {
    setFilter((p) => {
      if (p.includes(value)) return p.filter((item) => item != value);
      return [...p, value];
    });
  };
  return (
    <AccordionItem value="speedType">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Тип по швидкодії
      </AccordionTrigger>
      <AccordionContent className="px-2">
        <CheckboxList
          data={data}
          maxLimit={100}
          checked={filter}
          callback={handler}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default SpeedTypesFilter;
