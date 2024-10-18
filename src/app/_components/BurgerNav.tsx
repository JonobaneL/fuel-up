"use client";

import { useState } from "react";

import Link from "next/link";

import type { TypeParamsWithSub } from "@/types/paramsTypes";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type BurgerNavProps = {
  category: TypeParamsWithSub;
  onClose: () => void;
};

const BurgerNav = ({ category, onClose }: BurgerNavProps) => {
  const [isOpen, setOpen] = useState(false);
  const closeHandler = () => {
    setOpen(false);
    onClose();
  };
  return (
    <Sheet open={isOpen} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger className="w-full flex items-center justify-between">
        {category.name}
        <img className="size-3" src="/arrow.svg" alt="arrow" />
      </SheetTrigger>
      <SheetContent side="left" closeControlls={false} overlay={false}>
        <SheetHeader className="flex flex-row items-center gap-2 mb-4 space-y-0">
          <img
            className="size-3 rotate-180 flex-fix"
            src="/arrow.svg"
            alt="arrow"
          />
          <SheetTitle onClick={() => setOpen(false)}>
            {category.name}
          </SheetTitle>
        </SheetHeader>
        <ul className="space-y-2">
          <li>
            <Link
              className="font-medium"
              onClick={closeHandler}
              href={`/${category.slug}`}
            >
              Дивитись усі
            </Link>
          </li>
          {category.subTypes.map((item) => (
            <li key={item.id}>
              <Link href={`/${item.slug}`} onClick={closeHandler}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerNav;
