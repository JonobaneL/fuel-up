"use server";

import prisma from "@/lib/db";

export const getFavorites = (favorites_slugs: string[]) => {
  return prisma.product.findMany({
    where: {
      slug: {
        in: favorites_slugs,
      },
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
