export type ProductCartProps = {
  product: {
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
};
