"use client";

import OrderProduct from "./OrderProduct";

import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

import ProductsTotal from "@/components/ProductsTotal";

const Order = () => {
  const products = useTypeSelector((state) => state.shoppingCart);
  return (
    <div>
      <div className="space-y-3 divide-y mt-4 ">
        {products.map((item) => (
          <OrderProduct key={item.productId} product={item} />
        ))}
      </div>
      <ProductsTotal
        controlls={false}
        className="md:w-full md:max-w-full border-t pt-2"
      />
    </div>
  );
};

export default Order;
