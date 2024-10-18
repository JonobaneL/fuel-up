import CheckoutForm from "./_components/CheckoutForm";
import MyOrder from "./_components/MyOrder";

import PageWrapper from "@/components/PageWrapper";

const Checkout = () => {
  return (
    <PageWrapper className="py-10">
      <h1 className="font-title text-third text-2xl">Оформлення замовлення</h1>
      <div className="flex items-start gap-10 lg:gap-16 mt-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 rounded-md shadow-md p-4 md:p-5 lg:p-8">
          <CheckoutForm />
        </div>
        <MyOrder />
      </div>
    </PageWrapper>
  );
};

export default Checkout;
