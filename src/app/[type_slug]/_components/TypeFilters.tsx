import Link from "next/link";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

import { getType } from "@/actions/paramsActions";

type FiltersProps = {
  slug: string;
};

const TypeFilters = async ({ slug }: FiltersProps) => {
  const type = await getType(slug);

  if (type?.subTypes.length == 0) return null;

  return (
    <AccordionItem value="type">
      <AccordionTrigger className="px-2 hover:no-underline font-title text-base no-underline">
        Тип
      </AccordionTrigger>
      <AccordionContent className="px-2  max-h-[25rem] overflow-auto">
        <ul>
          {type?.subTypes.map((item) => (
            <li
              key={item.id}
              className="text-sm font-medium py-1.5 hover:text-primary transition-all "
            >
              <Link href={`/${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default TypeFilters;
