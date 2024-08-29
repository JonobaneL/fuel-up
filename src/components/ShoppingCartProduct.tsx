import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { CartProductType } from "@/models/ShoppingCartTypes";
import { priceDiscount } from "@/utils/priceDiscount";
import { getBriefProductDetails } from "@/actions/productAction";
import ProductQuantityControlls from "./ProductQuantityControlls";
import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";
import { removeProduct } from "@/store/reducers/ShoppingCartSlice";
import { generateProductLink } from "@/utils/generateProductLink";

type ProductProps = {
  product: CartProductType;
  closeCallback: () => void;
};

const ShoppingCartProduct = ({ product, closeCallback }: ProductProps) => {
  const dispatch = useTypeDispatch();
  const { data, isPending } = useQuery({
    queryKey: ["product", product.slug, product.flavour],
    queryFn: async () => {
      return getBriefProductDetails(product.slug, product.flavour);
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

  const productLink = generateProductLink(data || null);
  const productPrice =
    priceDiscount(
      data?.flavours[0].price || 0,
      data?.flavours[0].discount || 0
    ) * product.quantity;
  if (isPending) return <p>Loading...</p>;
  return (
    <div className="items-center gap-4 grid grid-cols-[80px_2fr_0.7fr_1fr_15px] pt-3">
      <Link
        href={productLink}
        className="flex gap-4 items-center"
        onClick={closeCallback}
      >
        <Image
          src={data?.images[0].url || ""}
          width={80}
          height={80}
          alt={data?.name || ""}
        />
      </Link>

      <div className="space-y-0.5">
        <Link
          href={productLink}
          className="font-medium"
          onClick={closeCallback}
        >
          {data?.name}
        </Link>
        <p className="text-third text-sm font-medium">
          {data?.flavours[0]?.flavour?.name}
        </p>
      </div>
      <ProductQuantityControlls product={product} />
      <p className="font-title text-xl text-third justify-self-center">
        {productPrice} грн
      </p>
      <Image
        onClick={() =>
          dispatch(
            removeProduct({
              product_slug: product.slug,
              flavour: product.flavour,
            })
          )
        }
        className="cursor-pointer"
        src="/close-icon-dark.svg"
        width={15}
        height={15}
        alt="remove"
      />
    </div>
  );
};

export default ShoppingCartProduct;
