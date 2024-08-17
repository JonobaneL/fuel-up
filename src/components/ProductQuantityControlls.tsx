"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { CartProduct } from "@/models/ShoppingCartContextTypes";

type ControllsProps = {
  product: CartProduct;
};

const ProductQuantityControlls = ({ product }: ControllsProps) => {
  const { increaseProductAmount, decreaseProductAmount } = useShoppingCart();
  return (
    <div className="flex items-center justify-between">
      <Button
        className="size-8 rounded-none text-white p-1"
        onClick={() => decreaseProductAmount(product.slug, product.flavour)}
      >
        <Image alt="minus" width={10} height={10} src="/minus.svg" />
      </Button>
      <p className="font-title text-third">{product.quantity}</p>
      <Button
        className="size-8 rounded-none text-white p-1"
        onClick={() => increaseProductAmount(product.slug, product.flavour)}
      >
        <Image alt="plus" width={10} height={10} src="/plus.svg" />
      </Button>
    </div>
  );
};

export default ProductQuantityControlls;
