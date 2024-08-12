import { SearchParams } from "@/models/paramsTypes";
import { deserialize } from "./searchParamsUtils";

export const generateFiltersConfig = (params: SearchParams) => {
  const keys = Object.keys(params || {});
  if (keys.length == 0) return {};
  const filtersConfig = keys.reduce((prev, key) => {
    if (key == "flavour")
      return {
        ...prev,
        flavours: {
          some: {
            flavour: {
              slug: {
                in: deserialize(key, params[key as keyof SearchParams]),
              },
            },
          },
        },
      };
    if (key == "price") {
      const price = params[key as keyof SearchParams]
        .split("-")
        .map((item) => parseInt(item));
      console.log(price);
      return {
        ...prev,
        flavours: {
          some: {
            price: {
              lt: price[1],
              gt: price[0],
            },
          },
        },
      };
    }
    return {
      ...prev,
      [key]: {
        slug: {
          in: deserialize(key, params[key as keyof SearchParams]),
        },
      },
    };
  }, {});
  return filtersConfig;
};
