import { SearchParamsType } from "@/models/paramsTypes";
import { deserialize } from "./searchParamsUtils";

export const generateFiltersConfig = (params: SearchParamsType) => {
  const keys = Object.keys(params || {});
  if (keys.length == 0) return {};
  const filtersConfig = keys.reduce((prev, key) => {
    if (key == "flavour")
      return {
        ...prev,
        flavours: {
          some: {
            amount: {
              gte: 1,
            },
            flavour: {
              slug: {
                in: deserialize(key, params[key as keyof SearchParamsType]),
              },
            },
          },
        },
      };
    if (key == "price") {
      const price = params[key as keyof SearchParamsType]
        .split("-")
        .map((item) => parseInt(item));
      console.log(price);
      return {
        ...prev,
        flavours: {
          some: {
            price: {
              lte: price[1],
              gte: price[0],
            },
            amount: {
              gt: 0,
            },
          },
        },
      };
    }
    return {
      ...prev,
      [key]: {
        slug: {
          in: deserialize(key, params[key as keyof SearchParamsType]),
        },
      },
    };
  }, {});
  return filtersConfig;
};
