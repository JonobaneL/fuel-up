"use client";
import { Category, CategoryWithSub } from "@/models/paramsTypes";
import Link from "next/link";
import { useState } from "react";

type NavProps = {
  categories: CategoryWithSub[];
  closeHandler: () => void;
};
const Nav = ({ categories, closeHandler }: NavProps) => {
  const [subCategories, setCategories] = useState<Category[] | null>(null);
  return (
    <div
      className="max-w-screen-width mx-auto pl-36 flex"
      onMouseLeave={() => setCategories([])}
    >
      <ul className="w-full max-w-72 flex-cover py-4">
        {categories.map((item) => (
          <li
            key={item.id}
            className="h-9 flex justify-between items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm"
            onMouseOver={() => setCategories(item.subTypes)}
          >
            <Link href={`/${item.slug}`} onClick={closeHandler}>
              {item.name}
            </Link>
            {item.subTypes.length > 0 && (
              <img className="size-3" src="/arrow.svg" alt="arrow" />
            )}
          </li>
        ))}
      </ul>
      {subCategories?.length ? (
        <ul className="w-full shadow-nav-shadow py-4">
          {subCategories?.map((item) => (
            <li
              key={item.id}
              className="h-9 w-1/2 flex justify-between items-center cursor-pointer hover:bg-gray-100 px-6 py-1 rounded-sm"
            >
              <Link href={`/${item.slug}`} onClick={closeHandler}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Nav;
