import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./ui/ProductPrice";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteProduct } from "@/actions/favoritesActoin";
import FavoriteProductSkeleton from "./ui/FavoriteProductSkeleton";
import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";
import { removeFavorite } from "@/store/reducers/FavoritesSlice";
import { generateProductLink } from "@/utils/generateProductLink";

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
    <div className="items-center gap-4 grid grid-cols-[2fr_1fr_20px] pt-3">
      <Link
        href={productLink}
        onClick={closeCallback}
        className="flex gap-4 items-center"
      >
        <Image
          src={data?.images[0].url || ""}
          width={80}
          height={80}
          alt={data?.name || ""}
        />
        <div className="space-y-0.5">
          <p className="font-medium">{data?.name}</p>
          <p className="text-third text-sm">{data?.brand.name}</p>
        </div>
      </Link>
      <ProductPrice
        discount={data?.flavours[0].discount || 0}
        price={data?.flavours[0].price || 0}
      />
      <Image
        className="cursor-pointer"
        src="/close-icon-dark.svg"
        onClick={() => dispatch(removeFavorite(product_slug))}
        width={15}
        height={15}
        alt="remove"
      />
    </div>
  );
};

export default FavoriteProduct;
