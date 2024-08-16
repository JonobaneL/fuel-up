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
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "@/actions/favoritesActoin";
import FavoriteProduct from "./FavoriteProduct";
import { useState } from "react";

const Favorites = () => {
  const { favorites } = useFavoritesContext();
  const [isOpen, setOpen] = useState(false);
  const { data, isPending } = useQuery({
    queryKey: ["favorites", favorites.length],
    queryFn: async () => getFavorites(favorites),
  });
  console.log(data);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setOpen(open)}>
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
          <DialogTitle className="font-title text-primary text-2xl">
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
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-3 divide-y">
            {data?.map((item) => (
              <FavoriteProduct
                key={item.id}
                product={item}
                closeCallback={() => setOpen(false)}
              />
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Favorites;
