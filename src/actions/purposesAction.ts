"use server";

import { allProductsRequestConfig } from "@/data/productDetailsConfigs";
import prisma from "@/lib/db";

export const getPurposes = () => {
  return prisma.purpose.findMany({
    select: {
      title: true,
      slug: true,
      imageUrl: true,
    },
  });
};
export const getPurpose = (slug: string) => {
  return prisma.purpose.findUnique({
    where: {
      slug: slug,
    },
    include: {
      products: {
        ...allProductsRequestConfig,
      },
    },
  });
};
