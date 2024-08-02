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
import TypeFilters from "./TypeFilters";
import ActiveFilters from "./ActiveFilters";
import {
  getAllBrands,
  getAllFlavours,
  getAllSpeedTypes,
  getCountries,
} from "@/requests/params";
import BrandsFilter from "./BrandsFilter";
import SpeedTypesFilter from "./SpeedTypesFilter";

type FiltersProps = {
  slug: string;
};
const Filters = async ({ slug }: FiltersProps) => {
  // const filters = [
  //   {
  //     id: "speed_type",
  //     title: "",
  //     content: speedType,
  //   },
  // ];
  const speed_types = await getAllSpeedTypes();
  const flavours = await getAllFlavours();
  const countries = await getCountries();
  return (
    <div className="w-[260px] h-full flex-cover">
      <ActiveFilters />
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
