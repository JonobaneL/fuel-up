import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";

import { getBriefProductDetails } from "@/actions/productAction";

import { CartProductType } from "@/types/ShoppingCartTypes";

import { removeProduct } from "@/store/reducers/ShoppingCartSlice";

import ProductQuantityControlls from "@/app/_components/ProductQuantityControlls";
import CartProductSkeleton from "@/components/ui/CartProductSkeleton";
import ProductImageLink from "@/components/ui/ProductImageLink";
import RemoveProductButton from "@/components/ui/RemoveProductButton";
import { generateProductLink } from "@/utils/generateProductLink";
import { priceDiscount } from "@/utils/priceDiscount";

type ProductProps = {
  product: CartProductType;
  closeCallback: () => void;
};

const ShoppingCartProduct = ({ product, closeCallback }: ProductProps) => {
  const dispatch = useTypeDispatch();
  const { productId, flavourId } = product;

  const { data, isPending } = useQuery({
    queryKey: ["product", productId, flavourId],
    queryFn: async () => {
      return getBriefProductDetails(productId, flavourId);
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

  const productLink = generateProductLink(data || null);

  const productPrice =
    priceDiscount(
      data?.flavours[0].price || 0,
      data?.flavours[0].discount || 0
    ) * product.quantity;

  if (isPending) return <CartProductSkeleton />;

  return (
    <div className="@container flex gap-4 items-center pt-3">
      <ProductImageLink
        link={productLink}
        src={data?.images[0].url}
        closeCallback={closeCallback}
        alt={data?.name}
      />
      <div className="w-full grid items-center gap-1 grid-cols-1 grid-rows-2 @[600px]:grid-cols-[2fr_2fr] @[600px]:grid-rows-1">
        <div className="space-y-0.5">
          <Link
            href={productLink}
            className="font-medium "
            onClick={closeCallback}
          >
            {data?.name}
          </Link>
          <p className="text-third text-sm font-medium">
            {data?.flavours[0]?.flavour?.name}
          </p>
        </div>
        <div className="grid gap-2 grid-cols-1 grid-rows-2 @[400px]:grid-cols-2 @[400px]:grid-rows-1">
          <ProductQuantityControlls product={product} />
          <p className="font-title text-xl text-third @[600px]:justify-self-center">
            {productPrice} грн
          </p>
        </div>
      </div>
      <RemoveProductButton
        removeCallback={() =>
          dispatch(
            removeProduct({
              productId,
              flavourId,
            })
          )
        }
      />
    </div>
  );
};

export default ShoppingCartProduct;
