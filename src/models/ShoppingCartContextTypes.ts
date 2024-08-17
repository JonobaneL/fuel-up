export type CartProduct = {
  slug: string;
  flavour: string;
  quantity: number;
};
export type ShoppingCartParams = {
  products: CartProduct[];
  products_amount: number;
  addProduct: (product_slug: string, flavour: string) => void;
  removeProduct: (product_slug: string, flavour: string) => void;
  increaseProductAmount: (product_slug: string, flavour: string) => void;
  decreaseProductAmount: (product_slug: string, flavour: string) => void;
};
