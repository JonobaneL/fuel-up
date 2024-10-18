"use client";

import { useState } from "react";

import ProductsTotal from "../ProductsTotal";
import ShoppingCartProduct from "../ShoppingCartProduct";
import Modal from "../ui/Modal";

import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

import { getCartAmount } from "@/store/reducers/ShoppingCartSlice";

const ShoppingCartDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  const products = useTypeSelector((state) => state.shoppingCart);
  const shoppingCartAmount = useTypeSelector((state) => getCartAmount(state));

  return (
    <Modal
      open={isOpen}
      openHandler={setOpen}
      title="Кошик товарів"
      triger={shoppingCartAmount > 0}
    >
      {children}
      {products.length ? (
        <div className="space-y-3 divide-y">
          {products?.map((item) => (
            <ShoppingCartProduct
              key={`${item.productId}_${item.flavourId}`}
              product={item}
              closeCallback={() => setOpen(false)}
            />
          ))}
        </div>
      ) : (
        <p>Наразі у вас немає доданих товарів</p>
      )}
      <ProductsTotal />
    </Modal>
  );
};

export default ShoppingCartDialog;
