import Link from "next/link";
import Search from "./ui/Search";
import Catalog from "./Catalog";
import TopHeader from "./TopHeader";
import { getMainTypes } from "@/actions/paramsActions";
import Image from "next/image";
import Favorites from "./Favorites";

const Header = async () => {
  const categories = await getMainTypes();

  return (
    <header>
      <TopHeader />
      <div className="px-20 shadow-header-shadow">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="h-7" />
            </Link>
            <Catalog categories={categories} />
          </div>
          <div className="flex items-center gap-4 w-fit">
            <Search />
            <div className="h-10 flex-cover flex items-center px-4 border-x">
              <Favorites />
            </div>
            <Image
              width={28}
              height={28}
              src="/header/bag.svg"
              alt="bag"
              className="size-7"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
