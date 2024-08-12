import { fakeProduct } from "@/data/fakeProduct";
import Rate from "./ui/Rate";
import { Button } from "./ui/button";
import AditionalProductInfo from "./AditionalProductInfo";
import FlavoursList from "./FlavoursList";

const ProductInfo = () => {
  const currentFlavour = fakeProduct.flavours[0];

  return (
    <>
      <h2 className="text-4xl font-semibold mb-1 text-gray-800">
        {fakeProduct.name}
      </h2>
      <h4 className="text-lg font-semibold text-gray-500">
        {fakeProduct.brand}
      </h4>
      <div className="flex items-center gap-3 mt-2 mb-6">
        <Rate />
        <p className="font-medium text-sm text-gray-500">
          Відгуки ({fakeProduct.reviews.length})
        </p>
      </div>
      <FlavoursList />
      <h4 className="font-title text-3xl mb-6">{currentFlavour.price} грн</h4>
      <div className="flex items-center gap-3.5">
        <Button className="h-10 px-3.5 flex items-center gap-3.5 font-title text-white bg-primary rounded-none text-base">
          Купити
          <img className="size-5" src="/shopping-bag.png" alt="bag" />
        </Button>
        <button>
          <img className="size-7" src="/heart.svg" alt="add to favorites" />
        </button>
      </div>
      <AditionalProductInfo />
    </>
  );
};

export default ProductInfo;
