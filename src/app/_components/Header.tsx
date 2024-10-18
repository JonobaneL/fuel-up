import Link from "next/link";

import BurgerMenu from "./BurgerMenu";
import Catalog from "./Catalog";
import ShoppingCartDialog from "../../components/dialog/ShoppingCartDialog";
import Favorites from "./Favorites";
import ShoppingCartButton from "./ShoppingCartButton";
import TopHeader from "./TopHeader";

import { getMainTypes } from "@/actions/paramsActions";

import Search from "@/components/ui/Search";

const Header = async () => {
  const categories = await getMainTypes();

  return (
    <header>
      <TopHeader />
      <div className=" px-6 sm:px-8 md:px-12 lg:px-20 shadow-header-shadow">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20">
          <div className="flex items-center gap-4 lg:gap-10">
            <BurgerMenu categories={categories} />

            <Link href="/">
              <img src="/logo.svg" alt="logo" className="h-7" />
            </Link>

            <Catalog categories={categories} />
          </div>
          <div className="flex items-center gap-4 w-fit">
            <div className="hidden md:block">
              <Search />
            </div>
            <div className="h-10 flex-cover flex items-center px-4 border-x">
              <Favorites />
            </div>
            <ShoppingCartDialog>
              <ShoppingCartButton />
            </ShoppingCartDialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
