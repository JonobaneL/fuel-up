import { Prisma } from "@prisma/client";

export type ProductCartParams = {
  name: string;
  brand: {
    name: string;
  };
  type: {
    slug: string;
  };
  flavours: {
    price: number;
    discount: number | null;
  }[];
  images: { url: string }[];
};

export type FavoriteProductParams = {
  id: string;
  slug: string;
  name: string;
  type: {
    slug: string;
  };
  flavours: {
    flavour: {
      name: string;
      slug: string;
    };
    discount: number | null;
    price: number;
  }[];
  images: {
    url: string;
  }[];
  brand: {
    slug: string;
    name: string;
  };
};
export type ProductCartProps = {
  product: ProductCartParams;
};
