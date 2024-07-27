import Image from "next/image";

type ProductProps = {
  product: {
    name: string;
    brand: {
      name: string;
    };
    type: {
      slug: string;
    };
    flavours: {
      price: number;
    }[];
    images: { url: string }[];
  };
};
const ProductCart = ({ product }: ProductProps) => {
  console.log(product.images);
  const product_img = product.images[0].url;
  return (
    <div className="max-w-52 w-full h-fit flex flex-col gap-1 p-2 hover:shadow-product-cart rounded-sm transition-shadow cursor-pointer">
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
      {/* <div className="flex gap-2">
        <p className="font-title text-light-gray text-lg line-through">
          1656грн
        </p>
        <p className="font-title text-primary text-lg">1439грн</p>
      </div> */}
      <p className="font-title text-lg">{product.flavours[0].price}грн</p>
    </div>
  );
};

export default ProductCart;
