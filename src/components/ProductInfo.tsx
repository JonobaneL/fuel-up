import Rate from "./ui/Rate";
import AditionalProductInfo from "./AditionalProductInfo";
import FlavoursList from "./FlavoursList";
import { getProductDetails } from "@/actions/productAction";
import { priceDiscount } from "@/utils/priceDiscount";
import ProductControlls from "./ProductControlls";
import ProductPrice from "./ui/ProductPrice";

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
      <h4 className="text-lg font-semibold text-gray-500 mb-6">
        {product?.brand.name}
      </h4>
      {product?.reviews.length ? (
        <div className="flex items-center gap-3 mb-2">
          <Rate />
          <p className="font-medium text-sm text-gray-500">
            Відгуки ({product?.reviews.length})
          </p>
        </div>
      ) : null}
      <FlavoursList flavours={product?.flavours} />
      <div className="space-y-6 mt-10">
        <ProductPrice
          discount={currentFlavour?.discount || 0}
          price={currentFlavour?.price || 0}
          fontSize="2xl"
        />
        <ProductControlls product_slug={product_slug} />
        <AditionalProductInfo product_slug={product_slug} />
      </div>
    </>
  );
};

export default ProductInfo;
