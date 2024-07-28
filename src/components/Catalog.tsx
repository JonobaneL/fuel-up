"use client";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Nav from "./Nav";
import { CategoryWithSub } from "@/models/paramsTypes";
import { useState } from "react";

type CatalogProps = {
  categories: CategoryWithSub[];
};
const Catalog = ({ categories }: CatalogProps) => {
  const [open, setIsOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button className="rounded-sm border bg-back hover:bg-inherit h-11 text-text font-medium flex items-center gap-2">
          <img src="/header/catalog.svg" className="size-5" alt="catalog" />
          <p className="text-sm">Каталог</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-dvw rounded-none py-0"
        sideOffset={20}
        avoidCollisions={true}
      >
        <Nav categories={categories} closeHandler={() => setIsOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};

export default Catalog;
