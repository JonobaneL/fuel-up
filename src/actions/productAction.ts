"use server";

import {
  favoriteProductConfig,
  shoppingCartProductConfig,
} from "@/data/productDetailsConfigs";
import prisma from "@/lib/db";
import { CartProduct } from "@/models/ShoppingCartContextTypes";
import { priceDiscount } from "@/utils/priceDiscount";

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

export const getBriefProductDetails = (
  product_slug: string,
  flavour?: string
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
export const getProductPrice = (product_slug: string, flavour: string) => {
  return prisma.product.findUnique({
    where: {
      slug: product_slug,
    },
    select: {
      flavours: {
        where: {
          flavour: {
            slug: flavour,
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
