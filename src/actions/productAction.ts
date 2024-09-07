"use server";

import {
  favoriteProductConfig,
  shoppingCartProductConfig,
} from "@/data/productDetailsConfigs";
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
      formType: true,
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

export type ProductDetailsResponse = Awaited<
  ReturnType<typeof getProductDetails>
>;

export const getBriefProductDetails = (
  product_slug: string,
  flavour?: string | null
) => {
  const selectConfig = flavour
    ? shoppingCartProductConfig(flavour)
    : favoriteProductConfig;
  return prisma.product.findUnique({
    where: {
      slug: product_slug,
    },
    select: selectConfig,
  });
};
export const getProductPrice = (
  product_slug: string,
  flavour: string | null
) => {
  return prisma.product.findUnique({
    where: {
      slug: product_slug,
    },
    select: {
      flavours: {
        where: {
          flavour: {
            slug: flavour || "",
          },
        },
        select: {
          price: true,
          discount: true,
        },
      },
    },
  });
};
export const getProductRate = async (product_slug: string) => {
  const response = await prisma.review.aggregate({
    _avg: {
      rate: true,
    },
    where: {
      Product: {
        slug: product_slug,
      },
    },
  });
  if (!response._avg.rate) return 0;
  return response._avg.rate;
};
export const getProductDetailsParams = async (params: string[]) => {
  return prisma.productDetailParam.findMany();
};
