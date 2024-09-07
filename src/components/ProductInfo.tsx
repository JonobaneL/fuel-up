import Rate from "./ui/Rate";
import AditionalProductInfo from "./AditionalProductInfo";
import FlavoursList from "./FlavoursList";
import { getProductDetails, getProductRate } from "@/actions/productAction";
import ProductControlls from "./ProductControlls";
import ProductPrice from "./ui/ProductPrice";

type ProductInfoProps = {
  product_slug: string;
  flavour_slug: string | null;
};
const ProductInfo = async ({
  product_slug,
  flavour_slug,
}: ProductInfoProps) => {
  const product = await getProductDetails(product_slug);
  const avarageRate = await getProductRate(product_slug);
  const currentFlavour =
    flavour_slug !== null
      ? product?.flavours.find((item) => item.flavour?.slug === flavour_slug)
      : product?.flavours[0];

  return (
    <>
      <h2 className="text-4xl font-semibold mb-1 text-gray-800">
        {product?.name}
      </h2>
      <h4 className="text-lg font-semibold text-gray-500 mb-6">
        {product?.brand.name}
      </h4>
      {avarageRate ? (
        <div className="flex items-center gap-3 mb-2">
          <Rate rate={avarageRate} />
          <p className="font-medium text-sm text-gray-500">
            Відгуки ({product?.reviews.length})
          </p>
        </div>
      ) : null}
      {product?.flavours[0].flavour != null ? (
        <FlavoursList flavours={product?.flavours} />
      ) : null}
      <div className="space-y-6 mt-10">
        <ProductPrice
          discount={currentFlavour?.discount || 0}
          price={currentFlavour?.price || 0}
          fontSize="2xl"
        />
        <ProductControlls product_slug={product_slug} />
        <AditionalProductInfo product={product} />
      </div>
    </>
  );
};

export default ProductInfo;
