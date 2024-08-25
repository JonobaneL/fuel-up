"use server";
import { allProductsRequestConfig } from "@/data/productDetailsConfigs";
import prisma from "@/lib/db";
import { SearchParamsType } from "@/models/paramsTypes";
import { generateFiltersConfig } from "@/utils/filtersConfig";

const getDefaultConfig = (type_slug: string) => {
  return {
    OR: [
      {
        type: {
          slug: type_slug,
        },
      },
      {
        type: {
          parent: {
            slug: type_slug,
          },
        },
      },
    ],
  };
};

export const getProducts = (type_slug: string, filters: SearchParamsType) => {
  if (type_slug == "products")
    return prisma.product.findMany(allProductsRequestConfig);
  const defaultProductsConfig = getDefaultConfig(type_slug);
  const aditionalFilters = generateFiltersConfig(filters);
  return prisma.product.findMany({
    where: {
      ...defaultProductsConfig,
      ...aditionalFilters,
    },
    ...allProductsRequestConfig,
  });
};
