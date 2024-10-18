import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";

import { getProductById } from "@/actions/productAction";

import { removeFavorite } from "@/store/reducers/FavoritesSlice";

import FavoriteProductSkeleton from "@/components/ui/FavoriteProductSkeleton";
import ProductImageLink from "@/components/ui/ProductImageLink";
import ProductPrice from "@/components/ui/ProductPrice";
import RemoveProductButton from "@/components/ui/RemoveProductButton";
import { generateProductLink } from "@/utils/generateProductLink";

type FavoriteProductProps = {
  productId: string;
  closeCallback: () => void;
};

const FavoriteProduct = ({
  productId,
  closeCallback,
}: FavoriteProductProps) => {
  const dispatch = useTypeDispatch();

  const { data, isPending } = useQuery({
    queryKey: ["favorite", productId],
    queryFn: async () => getProductById(productId),
  });

  const productLink = generateProductLink(data || null);

  if (isPending) return <FavoriteProductSkeleton />;

  return (
    <div className="@container items-center gap-4 flex pt-3">
      <ProductImageLink
        link={productLink}
        src={data?.images[0].url}
        closeCallback={closeCallback}
        alt={data?.name}
      />

      <div className="w-full grid grid-rows-[auto_auto] grid-cols-1 gap-1 @[600px]:grid-rows-1 @[600px]:grid-cols-[2fr_1fr] items-center @[600px]:gap-2">
        <div className="space-y-0.5 ">
          <Link
            href={productLink}
            onClick={closeCallback}
            className="font-medium cursor-pointer"
          >
            {data?.name}
          </Link>
          <p className="text-third text-sm">{data?.brand.name}</p>
        </div>
        <ProductPrice
          discount={data?.flavours[0].discount || 0}
          price={data?.flavours[0].price || 0}
        />
      </div>

      <RemoveProductButton
        removeCallback={() => dispatch(removeFavorite(productId))}
      />
    </div>
  );
};

export default FavoriteProduct;
