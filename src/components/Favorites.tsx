"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { useState } from "react";
import FavoriteProduct from "./FavoriteProduct";

const Favorites = () => {
  const { favorites } = useFavoritesContext();
  const [isOpen, setOpen] = useState(false);
  const dialogChangeHandler = (state: boolean) => {
    if (state && favorites.length) setOpen(state);
    if (!state) setOpen(state);
  };
  return (
    <Dialog open={isOpen} onOpenChange={dialogChangeHandler}>
      <DialogTrigger>
        <div className="w-fit h-fit relative">
          <Image
            width={28}
            height={28}
            src="/header/favorites.svg"
            alt="favorites"
            className="size-7"
          />
          {favorites.length ? (
            <div className="absolute size-5 leading-5 font-medium text-center -right-2 -top-2 z-10 text-xs bg-primary text-white rounded-full">
              {favorites.length}
            </div>
          ) : null}
        </div>
      </DialogTrigger>
      <DialogContent className="w-2/3 max-w-[60rem] py-12 px-12">
        <DialogHeader className="mb-2 flex flex-row justify-between items-center">
          <DialogTitle className="font-title font-normal text-primary text-3xl">
            Бажані товари
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
        {favorites.length ? (
          <div className="space-y-3 divide-y">
            {favorites?.map((item) => (
              <FavoriteProduct
                key={item}
                product_slug={item}
                closeCallback={() => setOpen(false)}
              />
            ))}
          </div>
        ) : (
          <p>Наразі у вас немає доданих товарів</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Favorites;
