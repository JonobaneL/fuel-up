import { countries } from "@/data/filters";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const CountryFilter = () => {
  return (
    <AccordionItem value="country">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Країна виробник
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3">
        {countries.map((item, index) => (
          <Label key={index} className="flex items-center gap-2 w-fit">
            <Checkbox className=" size-5" />
            {item}
          </Label>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default CountryFilter;
