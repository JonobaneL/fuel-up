import { flavours } from "@/data/filters";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import CheckboxList from "./ui/CheckboxList";
const FlavourFilter = () => {
  return (
    <AccordionItem value="flavor">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Смак
      </AccordionTrigger>
      <AccordionContent className="px-2 space-y-3 max-h-[24rem] overflow-auto">
        <Input placeholder="Пошук смаку" className="mt-1" />
        <CheckboxList data={flavours} maxLimit={15} />
      </AccordionContent>
    </AccordionItem>
  );
};

export default FlavourFilter;
