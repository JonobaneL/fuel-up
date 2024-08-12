"use server";
import prisma from "@/lib/db";
import { SearchParams } from "@/models/paramsTypes";
import { generateFiltersConfig } from "@/utils/filtersConfig";

const requestConfig = {
  select: {
    id: true,
    name: true,
    slug: true,
    brand: {
      select: {
        name: true,
      },
    },
    type: {
      select: {
        slug: true,
      },
    },
    flavours: {
      take: 1,
      where: {
        amount: { gt: 0 },
      },
      select: {
        id: true,
        price: true,
        discount: true,
      },
    },
    images: {
      where: {
        main: true,
      },
      select: {
        url: true,
      },
    },
  },
};
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

export const getProducts = (type_slug: string, filters: SearchParams) => {
  if (type_slug == "products") return prisma.product.findMany(requestConfig);
  const defaultProductsConfig = getDefaultConfig(type_slug);
  const aditionalFilters = generateFiltersConfig(filters);
  // console.log(aditionalFilters);
  return prisma.product.findMany({
    where: {
      ...defaultProductsConfig,
      ...aditionalFilters,
    },
    ...requestConfig,
  });
};
