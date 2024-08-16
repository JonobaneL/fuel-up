import DashedSeparator from "./ui/DashedSeparator";
import { getProductDetails } from "@/actions/productAction";

type InfoProps = {
  product_slug: string;
};

const AditionalProductInfo = async ({ product_slug }: InfoProps) => {
  const product = await getProductDetails(product_slug);

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <p className="flex-cover">Виробництво:</p>
        <DashedSeparator />
        <p className="flex-cover">{product?.country.name}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="flex-cover">Тип:</p>
        <DashedSeparator />
        <p className="flex-cover">{product?.type.name}</p>
      </div>
      <div className="flex items-center gap-2 h-fit">
        <p className="flex-cover">Тип по швидкодії:</p>
        <DashedSeparator />
        <p className="flex-cover">{product?.speedType?.name}</p>
      </div>
      {/* <div className="flex items-center gap-2">
        <p className="flex-cover">Кількість порцій:</p>
        <DashedSeparator />
        <p className="flex-cover">{fakeProduct.portionAmount}</p>
      </div> */}
    </div>
  );
};

export default AditionalProductInfo;
