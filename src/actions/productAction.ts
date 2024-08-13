"use server";

import prisma from "@/lib/db";

export const getProductDetails = (proudct_slug: string) => {
  return prisma.product.findUnique({
    where: {
      slug: proudct_slug,
    },
    include: {
      flavours: {
        include: {
          flavour: true,
        },
      },
      country: true,
      images: true,
      brand: true,
      speedType: true,
      reviews: true,
      type: {
        include: {
          parent: true,
          subTypes: true,
        },
      },
    },
  });
};
