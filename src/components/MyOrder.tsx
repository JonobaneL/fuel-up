import Image from "next/image";
import ShoppingCartDialog from "./ShoppingCartDialog";
import Order from "./Order";

const MyOrder = () => {
  return (
    <div className="w-full md:w-1/2 rounded-md shadow-md p-4 md:p-5 lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-title text-third text-xl">Моє замовлення</h2>
        <ShoppingCartDialog>
          <div className="group flex items-center gap-1 cursor-pointer ">
            <Image src="edit-icon.svg" alt="edit" width={16} height={16} />
            <p className="text-sm text-gray-600 font-medium group-hover:text-primary transition-colors duration-100">
              Редагувати
            </p>
          </div>
        </ShoppingCartDialog>
      </div>
      <Order />
      <div className="text-gray-700 text-sm mt-4">
        <h4 className="font-medium mb-2">Додатково оплачується:</h4>
        <ul className="list-disc pl-6 space-y-0.5">
          <li>Вартість доставки згідно з тарифами перевізника</li>
          <li>Переказ коштів (Накладений платіж)</li>
        </ul>
      </div>
    </div>
  );
};

export default MyOrder;
