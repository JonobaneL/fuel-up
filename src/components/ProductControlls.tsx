"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTypeDispatch, useTypeSelector } from "@/hooks/useTypedReduxHooks";
import {
  checkFavorites,
  toggleFavorite,
} from "@/store/reducers/FavoritesSlice";
import { addProduct } from "@/store/reducers/ShoppingCartSlice";

type ProductControllsProps = {
  product_slug: string;
};

const ProductControlls = ({ product_slug }: ProductControllsProps) => {
  const dispatch = useTypeDispatch();
  const searchParams = useSearchParams();
  const currentFlavour = searchParams.get("flavour") || null;
  const isInFavorites = useTypeSelector((state) =>
    checkFavorites(state, product_slug)
  );
  return (
    <div className="flex items-center gap-3.5">
      <Button
        onClick={() =>
          dispatch(addProduct({ product_slug, flavour: currentFlavour }))
        }
        className="h-10 px-3.5 flex items-center gap-3.5 font-title text-white bg-primary rounded-none text-base shadow-md"
      >
        Купити
        <img className="size-5" src="/shopping-bag.png" alt="bag" />
      </Button>
      <button onClick={() => dispatch(toggleFavorite(product_slug))}>
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
