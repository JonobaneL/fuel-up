export type CartProductType = {
  slug: string;
  flavour: string | null;
  quantity: number;
};
export type ShoppingCartParams = {
  products: CartProductType[];
  products_amount: number;
  addProduct: (product_slug: string, flavour: string) => void;
  removeProduct: (product_slug: string, flavour: string) => void;
  increaseProductAmount: (product_slug: string, flavour: string) => void;
  decreaseProductAmount: (product_slug: string, flavour: string) => void;
};
