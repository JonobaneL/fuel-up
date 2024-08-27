import { ProductCartProps } from "@/models/productTypes";
import Image from "next/image";
import Rate from "./ui/Rate";
import ProductPrice from "./ui/ProductPrice";
import { getProductRate } from "@/actions/productAction";
import Link from "next/link";

const ProductCard = async ({ product }: ProductCartProps) => {
  const product_img = product.images[0].url;
  const product_price = product.flavours[0].price;
  const product_discount = product.flavours[0].discount;
  const avarageRate = await getProductRate(product.slug);
  const productLink = product.flavours[0].flavour
    ? `${product.type.slug}/${product.slug}?flavour=${product.flavours[0].flavour.slug}`
    : `${product.type.slug}/${product.slug}`;
  return (
    <Link href={productLink} className="w-full">
      <div className=" w-full h-fit flex flex-col gap-1 p-2 hover:shadow-product-cart rounded-sm transition-shadow cursor-pointer">
        <Image
          src={product_img}
          alt="product"
          className="object-contain h-40 mb-2 self-center"
          height={160}
          width={160}
        />
        <p className="font-medium text-sm">{product.name}</p>
        <p className="text-light-gray text-xs mb-1">{product.brand.name}</p>
        {avarageRate ? <Rate rate={avarageRate} /> : null}
        <ProductPrice discount={product_discount} price={product_price} />
      </div>
    </Link>
  );
};

export default ProductCard;
