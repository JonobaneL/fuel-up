"use client";

import { useState } from "react";

import Image from "next/image";

import Nav from "./Nav";

import { TypeParamsWithSub } from "@/types/paramsTypes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type CatalogProps = {
  categories: TypeParamsWithSub[];
};

const Catalog = ({ categories }: CatalogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
        <DropdownMenuTrigger asChild>
          <Button className="hidden md:flex h-11 text-white rounded-none text-base tracking-wider gap-4 hover:bg-primary">
            <Image
              src="/header/catalog-icon.svg"
              alt="catalog"
              width={20}
              height={20}
            />
            Каталог
          </Button>
        </DropdownMenuTrigger>

        <Nav categories={categories} closeHandler={() => setOpen(false)} />
      </DropdownMenu>
    </>
  );
};

export default Catalog;
