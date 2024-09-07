"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import BurgerNav from "./BurgerNav";
import { TypeParamsWithSub } from "@/models/paramsTypes";
import { useState } from "react";

type BurgerMenuProps = {
  categories: TypeParamsWithSub[];
};

const BurgerMenu = ({ categories }: BurgerMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger className="md:hidden block">
        <img className="size-10" src="header/burger-icon.svg" alt="burger" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader className="mb-5">
          <Link href="/" onClick={() => setOpen(false)}>
            <img src="/logo.svg" alt="logo" className="h-7" />
          </Link>
          <SheetTitle />
        </SheetHeader>
        <div className="h-full">
          <ul className="mb-4 space-y-2">
            {categories.map((item) =>
              item.subTypes.length ? (
                <BurgerNav
                  key={item.id}
                  category={item}
                  onClose={() => setOpen(false)}
                />
              ) : (
                <li key={item.id}>
                  <Link href={`/${item.slug}`}>{item.name}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <ul className="bottom-6 text-sm space-y-2">
          <li>Оплата і доставка</li>
          <li>Обмін та повернення</li>
          <li>Контакти</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
