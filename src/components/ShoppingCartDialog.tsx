"use client";
import Image from "next/image";
import { useState } from "react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import ShoppingCartTotal from "./ShoppingCartTotal";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";
import { getCartAmount } from "@/store/reducers/ShoppingCartSlice";
import Modal from "./ui/Modal";

const ShoppingCartDialog = () => {
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
      <div className="relative">
        <Image
          width={28}
          height={28}
          src="/header/bag.svg"
          alt="bag"
          className="size-7"
        />
        {shoppingCartAmount ? (
          <div className="absolute size-5 leading-5 font-medium text-center -right-2 -top-2 z-10 text-xs bg-primary text-white rounded-full">
            {shoppingCartAmount}
          </div>
        ) : null}
      </div>

      {products.length ? (
        <div className="space-y-3 divide-y">
          {products?.map((item) => (
            <ShoppingCartProduct
              key={`${item.slug}_${item.flavour}`}
              product={item}
              closeCallback={() => setOpen(false)}
            />
          ))}
        </div>
      ) : (
        <p>Наразі у вас немає доданих товарів</p>
      )}
      <ShoppingCartTotal products={products} />
    </Modal>
  );
};

export default ShoppingCartDialog;
