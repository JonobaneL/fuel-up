import CheckoutForm from "@/components/CheckoutForm";
import Order from "@/components/Order";
import PageWrapper from "@/components/PageWrapper";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  return (
    <PageWrapper className="py-10">
      <h1 className="font-title text-third text-2xl">Оформлення замовлення</h1>
      <div className="flex gap-16 mt-10">
        <div className="w-1/2 rounded-md shadow-md p-8">
          <CheckoutForm />
        </div>
        <div className="w-1/2 rounded-md shadow-md p-8">
          <h2 className="font-title text-third text-xl">Моє замовлення</h2>
          <Order />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Checkout;
