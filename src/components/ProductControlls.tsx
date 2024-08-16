"use client";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { Button } from "./ui/button";
import Image from "next/image";

type ProductControllsProps = {
  product_slug: string;
};

const ProductControlls = ({ product_slug }: ProductControllsProps) => {
  const { checkFavorites, toggleFavorite } = useFavoritesContext();
  const isInFavorites = checkFavorites(product_slug);
  return (
    <div className="flex items-center gap-3.5">
      <Button className="h-10 px-3.5 flex items-center gap-3.5 font-title text-white bg-primary rounded-none text-base shadow-md">
        Купити
        <img className="size-5" src="/shopping-bag.png" alt="bag" />
      </Button>
      <button onClick={() => toggleFavorite(product_slug)}>
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
