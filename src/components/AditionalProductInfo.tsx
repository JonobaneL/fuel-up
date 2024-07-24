import { fakeProduct } from "@/data/fakeProduct";
import DashedSeparator from "./ui/DashedSeparator";

const AditionalProductInfo = () => {
  return (
    <div className="space-y-1 mt-7">
      <div className="flex items-center gap-2">
        <p className="flex-cover">Виробництво:</p>
        <DashedSeparator />
        <p className="flex-cover">{fakeProduct.country}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="flex-cover">Тип:</p>
        <DashedSeparator />
        <p className="flex-cover">{fakeProduct.type}</p>
      </div>
      <div className="flex items-center gap-2 h-fit">
        <p className="flex-cover">Тип по швидкодії:</p>
        <DashedSeparator />
        <p className="flex-cover">{fakeProduct.speedType}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex-cover">Кількість порцій:</p>
        <DashedSeparator />
        <p className="flex-cover">{fakeProduct.portionAmount}</p>
      </div>
    </div>
  );
};

export default AditionalProductInfo;
