import prisma from "@/lib/db";

const requestConfig = {
  select: {
    id: true,
    name: true,
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

export const getProducts = (type_slug: string) => {
  if (type_slug == "products") return prisma.product.findMany(requestConfig);
  return prisma.product.findMany({
    where: {
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
    },
    ...requestConfig,
  });
};
