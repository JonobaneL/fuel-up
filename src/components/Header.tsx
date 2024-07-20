import Catalog from "./Catalog";
import Search from "./ui/Search";

const Header = () => {
  return (
    <header>
      <div className="bg-secondary px-20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-12 text-sm">
          <ul className="flex gap-6 text-sm">
            <li>Оплата і доставка</li>
            <li>Обмін та повернення</li>
            <li>Контакти</li>
          </ul>
          <div className="flex items-center gap-1">
            <img src="/header/phone.svg" alt="" />
            <p>068 426 23 65</p>
          </div>
        </div>
      </div>
      <div className="px-20 shadow-header-shadow">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <img src="/logo.svg" alt="logo" className="h-7" />
            <Catalog />
          </div>
          <div className="flex items-center gap-4 w-fit">
            <Search />
            <div className="h-10 flex-cover flex items-center px-4 border-x">
              <img
                src="/header/favorites.svg"
                alt="favorites"
                className="size-7"
              />
            </div>
            <img src="/header/bag.svg" alt="bag" className="size-7" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
