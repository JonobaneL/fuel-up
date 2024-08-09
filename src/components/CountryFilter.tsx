"use client";
import { useTestContext } from "@/context/testContext";
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

const CountryFilter = ({ data }: FilterProps) => {
  const { params, updateParam } = useTestContext();

  return (
    <AccordionItem value="country">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Країна виробник
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3">
        <CheckboxList
          data={data}
          callback={(value) => updateParam("country", value)}
          checked={params.country || []}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default CountryFilter;
