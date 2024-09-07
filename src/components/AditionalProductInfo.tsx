import DashedSeparator from "./ui/DashedSeparator";
import {
  getProductDetailsParams,
  ProductDetailsResponse,
} from "@/actions/productAction";

type InfoProps = {
  product: ProductDetailsResponse;
};

const AditionalProductInfo = async ({ product }: InfoProps) => {
  if (!product) return null;
  const productParams = await getProductDetailsParams(Object.keys(product));
  console.log(product);

  return (
    <div className="space-y-1">
      {productParams &&
        productParams.map((item) => {
          const param = product[item.slug as keyof ProductDetailsResponse];
          return param ? (
            <div key={item.id} className="flex items-center gap-2">
              <p className="flex-cover">{item.name}:</p>
              <DashedSeparator />
              <p className="flex-cover">{param?.name}</p>
            </div>
          ) : null;
        })}
    </div>
  );
};

export default AditionalProductInfo;
