import { priceDiscount } from "@/utils/priceDiscount";

type ProductPriceProps = {
  fontSize?: "lg" | "xl" | "2xl";
  discount: number | null;
  price: number;
};

const ProductPrice = ({
  discount,
  price,
  fontSize = "lg",
}: ProductPriceProps) => {
  return (
    <>
      {discount ? (
        <div className="flex gap-2">
          <p
            className={`font-title text-light-gray text-${fontSize} line-through`}
          >
            {price} грн
          </p>
          <p className={`font-title text-primary text-${fontSize}`}>
            {priceDiscount(price, discount || 0)} грн
          </p>
        </div>
      ) : (
        <p className={`font-title text-${fontSize}`}>{price} грн</p>
      )}
    </>
  );
};

export default ProductPrice;
