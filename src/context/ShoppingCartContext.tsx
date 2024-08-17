"use client";
import {
  CartProduct,
  ShoppingCartParams,
} from "@/models/ShoppingCartContextTypes";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ShoppingCartContext = createContext<ShoppingCartParams | null>(null);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext) as ShoppingCartParams;
};
const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const products_amount = products.reduce(
    (prev, item) => prev + item.quantity,
    0
  );
  useEffect(() => {
    const shopping_cart = localStorage.getItem("shopping_cart");
    if (shopping_cart) setProducts(JSON.parse(shopping_cart));
  }, []);
  const checkCart = (product_slug: string, flavour: string) =>
    products.find(
      (item) => item.slug == product_slug && item.flavour == flavour
    );
  const setStore = (value: CartProduct[]) => {
    localStorage.setItem("shopping_cart", JSON.stringify(value));
  };
  const addProduct = (product_slug: string, flavour: string) => {
    const product = checkCart(product_slug, flavour);
    if (product) {
      const newValue = products.map((item) =>
        item.slug == product_slug && item.flavour == flavour
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setProducts(newValue);
      setStore(newValue);
      return;
    }
    const newValue = [
      ...products,
      { slug: product_slug, flavour, quantity: 1 },
    ];
    setProducts(newValue);
    setStore(newValue);
  };
  const removeProduct = (product_slug: string, flavour: string) => {
    const newValue = products.filter(
      (item) => item.slug !== product_slug || item.flavour !== flavour
    );
    setProducts(newValue);
    setStore(newValue);
  };
  const increaseProductAmount = (product_slug: string, flavour: string) => {
    const updatedValue = products.map((item) =>
      item.slug === product_slug && item.flavour === flavour
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setProducts(updatedValue);
    setStore(updatedValue);
  };
  const decreaseProductAmount = (product_slug: string, flavour: string) => {
    const updatedValue = products
      .map((item) =>
        item.slug === product_slug && item.flavour === flavour
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity !== 0);
    setProducts(updatedValue);
    setStore(updatedValue);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        products_amount,
        addProduct,
        removeProduct,
        increaseProductAmount,
        decreaseProductAmount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
