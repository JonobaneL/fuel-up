const CommonInfo = async () => {
  return (
    <section className="border rounded-sm flex p-5 mt-6">
      <div className="w-1/2 pr-5 border-r">
        <div className="flex items-center gap-2">
          <img src="/delivery-icon.svg" alt="delivery" />
          <p className="font-semibold text-light-gray">Доставка</p>
        </div>
        <ul className="mt-3 text-third list-disc pl-5">
          <li>Самовивіз з магазину</li>
          <li>Укрпошта від 30грн</li>
          <li>Нова пошта від 70грн</li>
        </ul>
      </div>
      <div className="w-1/2 pl-5">
        <div className="flex items-center gap-2">
          <img src="/wallet-icon.svg" alt="delivery" />
          <p className="font-semibold text-light-gray">Оплата</p>
        </div>
        <ul className="mt-3 text-third list-disc pl-5">
          <li>Оплата під час отримання товару</li>
        </ul>
      </div>
    </section>
  );
};

export default CommonInfo;
