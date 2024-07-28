const TopHeader = () => {
  return (
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
  );
};

export default TopHeader;
