"use server";

import prisma from "@/lib/db";

export const getFavoriteProduct = (favorite_slugs: string) => {
  return prisma.product.findUnique({
    where: {
      slug: favorite_slugs,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      brand: true,
      type: {
        select: {
          slug: true,
        },
      },
      flavours: {
        take: 1,
        where: {
          amount: {
            gt: 0,
          },
        },
        include: {
          flavour: true,
        },
      },
      images: {
        where: {
          main: true,
        },
      },
    },
  });
};
