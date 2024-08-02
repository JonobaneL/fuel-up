"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { useQueryParams } from "@/hooks/useQueryParams";
import { ParamProps } from "@/models/paramsTypes";

type FilterProps = {
  data: ParamProps[];
};

const CountryFilter = ({ data }: FilterProps) => {
  const [filter, setFilter] = useQueryParams("country");
  const handler = (value: string) => {
    setFilter((p) => {
      if (p.includes(value)) return p.filter((item) => item != value);
      return [...p, value];
    });
  };
  return (
    <AccordionItem value="country">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Країна виробник
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3">
        <CheckboxList data={data} callback={handler} checked={filter} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default CountryFilter;
