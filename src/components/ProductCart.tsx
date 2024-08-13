import { ProductCartProps } from "@/models/ProductCartProps";
import { priceDiscount } from "@/utils/priceDiscount";
import Image from "next/image";

const ProductCart = ({ product }: ProductCartProps) => {
  const product_img = product.images[0].url;
  const product_price = product.flavours[0].price;
  const product_discount = product.flavours[0].discount;
  //also check this commponent later
  return (
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
      <div className="flex gap-0.5">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <img className="size-4" src="/star-full.svg" alt="star" />
          ))}
      </div>
      {product.flavours[0].discount ? (
        <div className="flex gap-2">
          <p className="font-title text-light-gray text-lg line-through">
            {product_price}грн
          </p>
          <p className="font-title text-primary text-lg">
            {priceDiscount(product_price, product_discount || 0)}грн
          </p>
        </div>
      ) : (
        <p className="font-title text-lg">{product_price}грн</p>
      )}
    </div>
  );
};

export default ProductCart;
