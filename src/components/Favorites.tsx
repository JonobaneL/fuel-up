"use client";
import Image from "next/image";
import { useState } from "react";
import FavoriteProduct from "./FavoriteProduct";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";
import Modal from "./ui/Modal";

const Favorites = () => {
  const favorites = useTypeSelector((state) => state.favorites);
  const [isOpen, setOpen] = useState(false);
  return (
    <Modal
      open={isOpen}
      openHandler={setOpen}
      title="Бажані товари"
      triger={favorites.length > 0}
    >
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
      <>
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
      </>
    </Modal>
  );
};

export default Favorites;
