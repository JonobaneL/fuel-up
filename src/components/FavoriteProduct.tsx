import Image from "next/image";
import ProductPrice from "./ui/ProductPrice";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteProduct } from "@/actions/favoritesActoin";
import FavoriteProductSkeleton from "./ui/FavoriteProductSkeleton";
import { useTypeDispatch } from "@/hooks/useTypedReduxHooks";
import { removeFavorite } from "@/store/reducers/FavoritesSlice";
import { generateProductLink } from "@/utils/generateProductLink";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const linkHandler = () => {
    router.push(productLink);
    closeCallback();
  };
  if (isPending) return <FavoriteProductSkeleton />;
  return (
    <div className="items-center gap-4 grid grid-cols-[auto_2fr_1fr_15px] pt-3">
      <Image
        onClick={linkHandler}
        src={data?.images[0].url || ""}
        width={80}
        height={80}
        alt={data?.name || ""}
        className="cursor-pointer"
      />
      <div className="space-y-0.5 col-span-2 sm:col-span-1">
        <p onClick={linkHandler} className="font-medium cursor-pointer">
          {data?.name}
        </p>
        <p className="text-third text-sm">{data?.brand.name}</p>
        <div className="sm:hidden">
          <ProductPrice
            discount={data?.flavours[0].discount || 0}
            price={data?.flavours[0].price || 0}
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <ProductPrice
          discount={data?.flavours[0].discount || 0}
          price={data?.flavours[0].price || 0}
        />
      </div>
      <Image
        className="cursor-pointer row"
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
