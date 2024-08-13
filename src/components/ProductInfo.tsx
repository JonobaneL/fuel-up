import { fakeProduct } from "@/data/fakeProduct";
import Rate from "./ui/Rate";
import { Button } from "./ui/button";
import AditionalProductInfo from "./AditionalProductInfo";
import FlavoursList from "./FlavoursList";
import { getProductDetails } from "@/actions/productAction";
import { priceDiscount } from "@/utils/priceDiscount";

type ProductInfoProps = {
  product_slug: string;
  flavour_slug: string;
};
const ProductInfo = async ({
  product_slug,
  flavour_slug,
}: ProductInfoProps) => {
  const product = await getProductDetails(product_slug);
  const currentFlavour = product?.flavours.find(
    (item) => item.flavour.slug === flavour_slug
  );

  return (
    <>
      <h2 className="text-4xl font-semibold mb-1 text-gray-800">
        {product?.name}
      </h2>
      <h4 className="text-lg font-semibold text-gray-500">
        {product?.brand.name}
      </h4>
      <div className="flex items-center gap-3 mt-2 mb-6">
        <Rate />
        <p className="font-medium text-sm text-gray-500">
          Відгуки ({fakeProduct.reviews.length})
        </p>
      </div>
      <FlavoursList flavours={product?.flavours} />
      {currentFlavour?.discount ? (
        <div className="flex gap-4 mb-6">
          <h4 className="font-title text-2xl text-light-gray line-through">
            {currentFlavour?.price} грн
          </h4>
          <h4 className="font-title text-2xl text-primary">
            {priceDiscount(currentFlavour?.price, currentFlavour.discount)} грн
          </h4>
        </div>
      ) : (
        <h4 className="font-title text-2xl mb-6">
          {currentFlavour?.price} грн
        </h4>
      )}
      <div className="flex items-center gap-3.5">
        <Button className="h-10 px-3.5 flex items-center gap-3.5 font-title text-white bg-primary rounded-none text-base shadow-md">
          Купити
          <img className="size-5" src="/shopping-bag.png" alt="bag" />
        </Button>
        <button>
          <img className="size-7" src="/heart.svg" alt="add to favorites" />
        </button>
      </div>
      <AditionalProductInfo product_slug={product_slug} />
    </>
  );
};

export default ProductInfo;
