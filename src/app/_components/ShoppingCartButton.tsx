"use client";

import Image from "next/image";

import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

import { getCartAmount } from "@/store/reducers/ShoppingCartSlice";

const ShoppingCartButton = () => {
  const shoppingCartAmount = useTypeSelector((state) => getCartAmount(state));

  return (
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
  );
};

export default ShoppingCartButton;
