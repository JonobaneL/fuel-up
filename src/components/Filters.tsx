import CountryFilter from "./CountryFilter";
import FlavourFilter from "./FlavourFilter";
import PriceFilter from "./PriceFilter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import TypeFilters from "./TypeFilters";
import {
  getAllFlavours,
  getAllSpeedTypes,
  getCountries,
} from "@/actions/paramsActions";
import BrandsFilter from "./BrandsFilter";
import SpeedTypesFilter from "./SpeedTypesFilter";

type FiltersProps = {
  slug: string;
};
const Filters = async ({ slug }: FiltersProps) => {
  const speed_types = await getAllSpeedTypes();
  const flavours = await getAllFlavours();
  const countries = await getCountries();
  return (
    <div className="w-[260px] h-full flex-cover">
      <Accordion type="multiple" defaultValue={["price"]}>
        <TypeFilters slug={slug} />
        <SpeedTypesFilter data={speed_types} />
        <BrandsFilter />
        <FlavourFilter data={flavours} />
        <AccordionItem value="price">
          <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
            Ціна
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <PriceFilter />
          </AccordionContent>
        </AccordionItem>
        <CountryFilter data={countries} />
      </Accordion>
    </div>
  );
};

export default Filters;
