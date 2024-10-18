import BrandsFilter from "./BrandsFilter";
import Filter from "./Filter";
import PriceFilter from "./PriceFilter";
import TypeFilters from "./TypeFilters";

import {
  getAllFlavours,
  getAllSpeedTypes,
  getCountries,
} from "@/actions/paramsActions";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FiltersProps = {
  slug: string;
};

const Filters = async ({ slug }: FiltersProps) => {
  const speed_types = await getAllSpeedTypes();
  const flavours = await getAllFlavours();
  const countries = await getCountries();

  return (
    <div className="w-full xl:w-[260px] h-full flex-cover">
      <Accordion type="multiple" defaultValue={["price"]}>
        <TypeFilters slug={slug} />
        <Filter
          data={speed_types}
          title="Тип по швидкодії"
          paramName="speedType"
        />
        <BrandsFilter />
        <Filter data={flavours} title="Смак" paramName="flavour" />
        <AccordionItem value="price">
          <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
            Ціна
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <PriceFilter />
          </AccordionContent>
        </AccordionItem>
        <Filter data={countries} title="Країна виробник" paramName="country" />
      </Accordion>
    </div>
  );
};

export default Filters;
