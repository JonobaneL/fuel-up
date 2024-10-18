"use client";

import Image from "next/image";

import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";

import { CartProductType } from "@/types/ShoppingCartTypes";

import {
  decreaseProductAmount,
  increaseProductAmount,
} from "@/store/reducers/ShoppingCartSlice";

import { Button } from "@/components/ui/button";

type ControllsProps = {
  product: CartProductType;
};

const ProductQuantityControlls = ({ product }: ControllsProps) => {
  const dispatch = useTypeDispatch();

  const { flavourId, productId } = product;

  return (
    <div className="flex items-center justify-between max-w-40">
      <Button
        className="size-8 rounded-none text-white p-1"
        onClick={() =>
          dispatch(
            decreaseProductAmount({
              flavourId,
              productId,
            })
          )
        }
      >
        <Image
          alt="minus"
          className="size-2.5"
          width={10}
          height={10}
          src="/minus.svg"
        />
      </Button>
      <p className="font-title text-third">{product.quantity}</p>
      <Button
        className="size-8 rounded-none text-white p-1"
        onClick={() =>
          dispatch(
            increaseProductAmount({
              flavourId,
              productId,
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
