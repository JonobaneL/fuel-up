"use server";

import {
  productByIdConfig,
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
  productId: string,
  flavourId: string
) => {
  const selectConfig = shoppingCartProductConfig(flavourId);
  return prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: selectConfig,
  });
};
export const getProductPrice = (productId: string, flavourId: string) => {
  return prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      flavours: {
        where: {
          id: flavourId,
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
export const getProductDetailsParams = async () => {
  return prisma.productDetailParam.findMany();
};

export const getProductById = (productId: string) => {
  return prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: productByIdConfig,
  });
};
