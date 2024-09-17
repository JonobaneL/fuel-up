"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { TypeParamsWithSub } from "@/models/paramsTypes";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Nav from "./Nav";
import { useState } from "react";

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
