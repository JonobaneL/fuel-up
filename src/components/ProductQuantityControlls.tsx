"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { CartProductType } from "@/models/ShoppingCartTypes";
import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";
import {
  decreaseProductAmount,
  increaseProductAmount,
} from "@/store/reducers/ShoppingCartSlice";

type ControllsProps = {
  product: CartProductType;
};

const ProductQuantityControlls = ({ product }: ControllsProps) => {
  const dispatch = useTypeDispatch();
  const { flavour, slug } = product;
  return (
    <div className="flex items-center justify-between">
      <Button
        className="size-8 rounded-none text-white p-1"
        onClick={() =>
          dispatch(
            decreaseProductAmount({
              product_slug: slug,
              flavour,
            })
          )
        }
      >
        <Image alt="minus" width={10} height={10} src="/minus.svg" />
      </Button>
      <p className="font-title text-third">{product.quantity}</p>
      <Button
        className="size-8 rounded-none text-white p-1"
        onClick={() =>
          dispatch(
            increaseProductAmount({
              product_slug: slug,
              flavour,
            })
          )
        }
      >
        <Image alt="plus" width={10} height={10} src="/plus.svg" />
      </Button>
    </div>
  );
};

export default ProductQuantityControlls;
