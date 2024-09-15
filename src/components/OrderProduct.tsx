import { getBriefProductDetails } from "@/actions/productAction";
import { CartProductType } from "@/models/ShoppingCartTypes";
import { generateProductLink } from "@/utils/generateProductLink";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ProductImageLink from "./ui/ProductImageLink";

type OrderProductProps = {
  product: CartProductType;
};

const OrderProduct = ({ product }: OrderProductProps) => {
  const { data, isPending } = useQuery({
    queryKey: ["product", product.slug, product.flavour],
    queryFn: async () => {
      return getBriefProductDetails(product.slug, product.flavour);
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
  const productLink = generateProductLink(data || null);
  if (isPending) return <p>Loading...</p>;
  return (
    <div className="flex gap-2 items-center pt-3">
      <ProductImageLink
        link={productLink}
        src={data?.images[0].url}
        alt={data?.name}
      />
      <div className="w-full space-y-0.5">
        <Link href={productLink} className="font-medium ">
          {data?.name}
        </Link>
        <p className="text-third text-sm font-medium">
          {data?.flavours[0]?.flavour?.name}
        </p>
        <p className="text-third text-sm font-medium">
          К-сть: {product.quantity} шт.
        </p>
      </div>
    </div>
  );
};

export default OrderProduct;
