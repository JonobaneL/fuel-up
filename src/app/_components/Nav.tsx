import Link from "next/link";

import { TypeParamsWithSub } from "@/types/paramsTypes";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

type NavProps = {
  categories: TypeParamsWithSub[];
  closeHandler: () => void;
};
const Nav = ({ categories, closeHandler }: NavProps) => {
  return (
    <DropdownMenuContent align="start" sideOffset={20} className="w-[16rem]">
      {categories.map((item) =>
        item.subTypes.length ? (
          <DropdownMenuSub key={item.id}>
            <DropdownMenuSubTrigger>
              <Link href={`/${item.slug}`} onClick={closeHandler}>
                {item.name}
              </Link>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-[16rem]">
                {item.subTypes.map((subType) => (
                  <DropdownMenuItem asChild key={subType.id}>
                    <Link href={`/${subType.slug}`}>{subType.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        ) : (
          <DropdownMenuItem asChild key={item.id}>
            <Link href={`/${item.slug}`}>{item.name}</Link>
          </DropdownMenuItem>
        )
      )}
    </DropdownMenuContent>
  );
};

export default Nav;
