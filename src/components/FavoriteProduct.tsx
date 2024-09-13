import ProductPrice from "./ui/ProductPrice";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteProduct } from "@/actions/favoritesActoin";
import FavoriteProductSkeleton from "./ui/FavoriteProductSkeleton";
import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";
import { removeFavorite } from "@/store/reducers/FavoritesSlice";
import { generateProductLink } from "@/utils/generateProductLink";
import RemoveProductButton from "./ui/RemoveProductButton";
import ProductImageLink from "./ui/ProductImageLink";
import Link from "next/link";

type FavoriteProductProps = {
  product_slug: string;
  closeCallback: () => void;
};

const FavoriteProduct = ({
  product_slug,
  closeCallback,
}: FavoriteProductProps) => {
  const { data, isPending } = useQuery({
    queryKey: ["favorite", product_slug],
    queryFn: async () => getFavoriteProduct(product_slug),
  });
  const productLink = generateProductLink(data || null);
  const dispatch = useTypeDispatch();

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
        removeCallback={() => dispatch(removeFavorite(product_slug))}
      />
    </div>
  );
};

export default FavoriteProduct;
