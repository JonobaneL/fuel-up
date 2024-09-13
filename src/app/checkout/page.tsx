import PageWrapper from "@/components/PageWrapper";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  return (
    <PageWrapper className="py-10">
      <h1 className="font-title text-third text-2xl">Оформлення замовлення</h1>
      <div className="flex gap-16 mt-10">
        <div className="w-1/2 rounded-md shadow-md p-8">
          <h2 className="font-title text-third text-xl">Особисті дані</h2>
          <div className="space-y-2 mt-6">
            <Input placeholder="Ім'я Прізвище" />
            <Input placeholder="Номер телефону" />
            <Input placeholder="Електрона адреса" />
          </div>
          <h2 className="font-title text-third text-xl mt-10">
            Оберіть місто і спосіб доставки
          </h2>
          <div className="space-y-2 mt-6">
            <Input placeholder="Ім'я Прізвище" />
            <Input placeholder="Номер телефону" />
            <Input placeholder="Електрона адреса" />
          </div>
        </div>
        <div className="w-1/2 rounded-md shadow-md p-8">
          <h2 className="font-title text-third text-xl">Моє замовлення</h2>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Checkout;
