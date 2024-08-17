"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import ShoppingCartProduct from "./ShoppingCartProduct";
import ShoppingCartTotal from "./ShoppingCartTotal";

const ShoppingCartDialog = () => {
  const [isOpen, setOpen] = useState(false);
  const { products, products_amount } = useShoppingCart();
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger className="relative">
        <Image
          width={28}
          height={28}
          src="/header/bag.svg"
          alt="bag"
          className="size-7"
        />
        {products_amount ? (
          <div className="absolute size-5 leading-5 font-medium text-center -right-2 -top-2 z-10 text-xs bg-primary text-white rounded-full">
            {products_amount}
          </div>
        ) : null}
      </DialogTrigger>
      <DialogContent className="w-2/3 max-w-[60rem] py-12 px-12 overflow-auto">
        <DialogHeader className="mb-2 flex flex-row justify-between items-center">
          <DialogTitle className="font-title font-normal text-primary text-3xl">
            Кошик товарів
          </DialogTitle>
          <Image
            onClick={() => setOpen(false)}
            className="cursor-pointer"
            src="/close-icon.svg"
            width={25}
            height={25}
            alt="close"
          />
        </DialogHeader>
        {products.length ? (
          <div className="space-y-3 divide-y">
            {products?.map((item) => (
              <ShoppingCartProduct
                key={`${item.slug}_${item.flavour}`}
                product={item}
              />
            ))}
          </div>
        ) : (
          <p>Наразі у вас немає доданих товарів</p>
        )}
        <ShoppingCartTotal products={products} />
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingCartDialog;
