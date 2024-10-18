"use client";

import { useSearchOptions } from "@/hooks/useSearchOptions";

import { ProductFlavorParams } from "@/types/paramsTypes";

type ListProps = {
  flavours: ProductFlavorParams[] | undefined;
};

const FlavoursList = ({ flavours }: ListProps) => {
  const [flavour, setFlavour] = useSearchOptions("flavour");
  const currentFlavour = flavours
    ? flavours.find((item) => item.flavour?.slug == flavour)
    : null;

  return (
    <div>
      <p className="text-third text-lg font-semibold">Асортимент смаків</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {flavours?.map((item) => (
          <div
            key={item.id}
            onClick={() => setFlavour(item.flavour?.slug || "")}
            className={`px-2.5 rounded-sm border cursor-pointer  flex items-center h-8 ${
              currentFlavour?.id == item.id ? "text-white bg-primary" : ""
            }
        ${
          item.amount == 0
            ? "border-gray-600 text-gray-600 cursor-default pointer-events-none"
            : "border-primary"
        }
        `}
          >
            {item.flavour?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavoursList;
