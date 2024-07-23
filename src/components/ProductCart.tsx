import Image from "next/image";

const ProductCart = () => {
  return (
    <div className="max-w-52 flex flex-col gap-1 p-2 hover:shadow-product-cart rounded-sm transition-shadow cursor-pointer">
      <Image
        src="/product1.jpg"
        alt="product"
        className="object-contain h-40 mb-2 self-center"
        height={160}
        width={160}
      />
      <p className="font-medium text-sm">100% Whey Gold Standard 909 грамів</p>
      <p className="text-light-gray text-xs mb-1">Optimum Nutrition</p>
      <div className="flex gap-0.5">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <img className="size-4" src="/star-full.svg" alt="star" />
          ))}
      </div>
      <div className="flex gap-2">
        <p className="font-title text-light-gray text-lg line-through">
          1656грн
        </p>
        <p className="font-title text-primary text-lg">1439грн</p>
      </div>
    </div>
  );
};

export default ProductCart;
