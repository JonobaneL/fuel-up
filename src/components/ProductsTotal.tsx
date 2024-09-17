"use client";
import { useQueries } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { getProductPrice } from "@/actions/productAction";
import { priceDiscount } from "@/utils/priceDiscount";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";
import { cn } from "@/lib/utils";

type ProductsTotalProps = {
  controlls?: boolean;
  className?: string;
};

const ProductsTotal = ({ controlls = true, className }: ProductsTotalProps) => {
  const products = useTypeSelector((state) => state.shoppingCart);
  const results = useQueries({
    queries: products.map((product) => ({
      queryKey: ["product", product.productId, product.flavourId],
      queryFn: async () => {
        return getProductPrice(product.productId, product.flavourId);
      },
      staleTime: 24 * 60 * 60 * 1000,
    })),
    combine: (response) => ({
      total: response.reduce((total, product, index) => {
        const productPrice = priceDiscount(
          product.data?.flavours[0].price || 0,
          product.data?.flavours[0].discount || 0
        );
        const productTotal = productPrice * products[index].quantity;
        return total + productTotal;
      }, 0),
      pending: response.some((response) => response.isPending),
    }),
  });
  return (
    <div
      className={cn(
        "md:ml-auto md:mr-0 md:mt-4 md:w-1/3 md:max-w-60 flex flex-col gap-2 sm:flex-row md:flex-col sm:gap-10 md:gap-0 items-center",
        className
      )}
    >
      <div className="flex justify-between flex-1 md:mb-2 w-full">
        <p className="font-title text-lg text-third">Разом</p>
        <p className="font-title text-lg text-third">{results.total} грн</p>
      </div>
      {controlls && (
        <Button className="w-full sm:w-fit md:w-full text-white rounded-none flex-fix">
          Оформити замовлення
        </Button>
      )}
    </div>
  );
};

export default ProductsTotal;
