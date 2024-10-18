"use client";

import Image from "next/image";

import { useTypeDispatch, useTypeSelector } from "@/hooks/useTypedReduxHooks";

import {
  checkFavorites,
  toggleFavorite,
} from "@/store/reducers/FavoritesSlice";
import { addProduct } from "@/store/reducers/ShoppingCartSlice";

import { Button } from "@/components/ui/button";

type ProductControllsProps = {
  productId: string;
  flavourId: string;
};

const ProductControlls = ({ productId, flavourId }: ProductControllsProps) => {
  const dispatch = useTypeDispatch();
  const isInFavorites = useTypeSelector((state) =>
    checkFavorites(state, productId)
  );

  return (
    <div className="flex items-center gap-3.5">
      <Button
        onClick={() => dispatch(addProduct({ productId, flavourId }))}
        className="h-10 px-3.5 flex items-center gap-3.5 font-title text-white bg-primary rounded-none text-base shadow-md"
      >
        Купити
        <img className="size-5" src="/shopping-bag.png" alt="bag" />
      </Button>
      <button onClick={() => dispatch(toggleFavorite(productId))}>
        <Image
          className="size-6"
          width={24}
          height={24}
          src={isInFavorites ? "/full-heart.svg" : "/heart.svg"}
          alt="add to favorites"
        />
      </button>
    </div>
  );
};

export default ProductControlls;
