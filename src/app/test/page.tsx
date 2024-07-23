import CountryFilter from "@/components/CountryFilter";
import PriceFilter from "@/components/PriceFilter";
import ProductCart from "@/components/ProductCart";
import SortSelect from "@/components/SortSelects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Test = () => {
  return (
    <div className="my-14">
      <h1 className="mb-10">Test page</h1>
      <section className="flex gap-5">
        <div className="w-[260px] h-full flex-cover">
          filters
          <Accordion type="multiple" defaultValue={["price"]}>
            <AccordionItem value="type">
              <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
                Тип
              </AccordionTrigger>
              <AccordionContent className="px-2">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="speedType">
              <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
                Тип по швидкодії
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brands">
              <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
                Бренди
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="flavor">
              <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
                Смак
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
                Ціна
              </AccordionTrigger>
              <AccordionContent className="px-2">
                <PriceFilter />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="country">
              <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
                Країна виробник
              </AccordionTrigger>
              <AccordionContent className="px-2">
                <CountryFilter />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-title text-2xl text-third">Протеїни</h2>
            <SortSelect />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
