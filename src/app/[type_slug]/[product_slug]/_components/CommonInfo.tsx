import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommonInfo = () => {
  return (
    <section className="mt-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="delivery">
          <AccordionTrigger className="hover:no-underline px-2 py-3">
            <div className="flex gap-4 items-center">
              <img className="size-6" src="/delivery-icon.svg" alt="delivery" />
              <p className="font-semibold text-light-gray">Доставка</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <ul className="text-third list-disc pl-6 space-y-1">
              <li>Самовивіз з магазину</li>
              <li>Укрпошта від 30грн</li>
              <li>Нова пошта від 70грн</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="payment">
          <AccordionTrigger className="hover:no-underline px-2 py-3">
            <div className="flex gap-4 items-center">
              <img className="size-5" src="/wallet-icon.svg" alt="payment" />
              <p className="font-semibold text-light-gray">Оплата</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <ul className="text-third list-disc pl-6">
              <li>Оплата під час отримання товару</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default CommonInfo;
