import {
  getProductDetailsParams,
  ProductDetailsResponse,
} from "@/actions/productAction";

import DashedSeparator from "@/components/ui/DashedSeparator";

type InfoProps = {
  product: ProductDetailsResponse;
};

const AditionalProductInfo = async ({ product }: InfoProps) => {
  if (!product) return null;
  const productParams = await getProductDetailsParams();
  console.log(productParams);

  return (
    <div className="space-y-1">
      {productParams &&
        productParams.map((item) => {
          const param = product[item.slug as keyof ProductDetailsResponse];
          return param ? (
            <div key={item.id} className="flex items-center gap-2">
              <p className="flex-cover text-sm">{item.name}:</p>
              <DashedSeparator />
              <p className="flex-cover text-sm">{param?.name}</p>
            </div>
          ) : null;
        })}
    </div>
  );
};

export default AditionalProductInfo;
