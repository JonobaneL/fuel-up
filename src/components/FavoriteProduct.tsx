import Link from "next/link";
import ProductPrice from "./ui/ProductPrice";
import { FavoriteProductParams } from "@/models/productTypes";
import Image from "next/image";
import { useFavoritesContext } from "@/context/FavoritesContext";

type FavoriteProductProps = {
  product: FavoriteProductParams;
  closeCallback: () => void;
};

const FavoriteProduct = ({ product, closeCallback }: FavoriteProductProps) => {
  const productLink = `/${product.type.slug}/${product.slug}?flavour=${product.flavours[0].flavour.slug}`;
  const { removeFavorite } = useFavoritesContext();
  return (
    <div className="items-center gap-4 grid grid-cols-[2fr_1fr_20px] pt-3">
      <Link
        href={productLink}
        onClick={closeCallback}
        className="flex gap-4 items-center"
      >
        <Image
          src={product.images[0].url}
          width={80}
          height={80}
          alt={product.name}
        />
        <div className="space-y-1">
          <p className="font-medium">{product.name}</p>
          <p className="text-third text-sm">{product.brand.name}</p>
        </div>
      </Link>

      <ProductPrice
        discount={product.flavours[0].discount}
        price={product.flavours[0].price}
      />
      <Image
        className="cursor-pointer"
        src="/close-icon-dark.svg"
        onClick={() => removeFavorite(product.slug)}
        width={15}
        height={15}
        alt="remove"
      />
    </div>
  );
};

export default FavoriteProduct;
