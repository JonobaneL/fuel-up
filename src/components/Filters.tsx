import { brands, speedType, type } from "@/data/filters";
import CountryFilter from "./CountryFilter";
import FlavourFilter from "./FlavourFilter";
import PriceFilter from "./PriceFilter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CheckboxList from "./ui/CheckboxList";
import { Input } from "./ui/input";

const Filters = () => {
  return (
    <div className="w-[260px] h-full flex-cover">
      <Accordion type="multiple" defaultValue={["price"]}>
        <AccordionItem value="type">
          <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
            Тип
          </AccordionTrigger>
          <AccordionContent className="px-2  max-h-[25rem] overflow-auto">
            <CheckboxList data={type} maxLimit={100} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="speedType">
          <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
            Тип по швидкодії
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <CheckboxList data={speedType} maxLimit={100} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
            Бренди
          </AccordionTrigger>
          <AccordionContent className="px-2 max-h-[25rem] overflow-auto">
            <Input className="mt-1 mb-4" placeholder="Пошук бренду" />
            <CheckboxList data={brands} maxLimit={15} />
          </AccordionContent>
        </AccordionItem>
        <FlavourFilter />
        <AccordionItem value="price">
          <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
            Ціна
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <PriceFilter />
          </AccordionContent>
        </AccordionItem>
        <CountryFilter />
      </Accordion>
    </div>
  );
};

export default Filters;