import { useQueries } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { CartProductType } from "@/models/ShoppingCartTypes";
import { getProductPrice } from "@/actions/productAction";
import { priceDiscount } from "@/utils/priceDiscount";

type TotalProps = {
  products: CartProductType[];
};

const ShoppingCartTotal = ({ products }: TotalProps) => {
  const results = useQueries({
    queries: products.map((product) => ({
      queryKey: ["product", product.slug, product.flavour],
      queryFn: async () => {
        return getProductPrice(product.slug, product?.flavour);
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
    <div className="ml-auto mr-0 mt-4 w-1/3 max-w-60">
      <div className="flex justify-between">
        <p className="font-title text-lg text-third mb-2">Разом</p>
        <p className="font-title text-lg text-third mb-2">
          {results.total} грн
        </p>
      </div>
      <Button className=" text-white rounded-none w-full">
        Оформити замовлення
      </Button>
    </div>
  );
};

export default ShoppingCartTotal;
