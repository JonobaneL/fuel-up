export type ProductCartParams = {
  slug: string;
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

export type ProductCartProps = {
  product: ProductCartParams;
};
export type BriefProductInfoType = {
  id: string;
  name: string;
  slug: string;
  brand: {
    name: string;
  };
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
  images: { url: string }[];
  quantity: number;
};
