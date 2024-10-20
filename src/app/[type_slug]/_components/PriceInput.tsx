import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";

import { Input } from "@/components/ui/input";
import { priceConvert } from "@/utils/priceConver";

type PriceInputProps = {
  minPrice: number;
  maxPrice: number;
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
};

const PriceInput = ({
  price,
  setPrice,
  minPrice,
  maxPrice,
}: PriceInputProps) => {
  const { updateFilter, removeFilter } = useFilters();

  const filters = useTypeSelector((state) => state.filters);

  const handlePriceChange = (value: string, index: number) => {
    const numericValue = value.replace(/\D/g, "");
    const newPrice = [...price];
    newPrice[index] = !Number.isNaN(parseInt(numericValue))
      ? parseInt(numericValue)
      : 0;
    setPrice(newPrice);
  };

  const onBlurHandler = (value: string, index: number) => {
    const newPrice = [...price];
    newPrice[index] = Math.max(
      minPrice,
      Math.min(maxPrice, parseInt(value) || 0)
    );
    setPrice(newPrice);
    if (newPrice[0] == minPrice && newPrice[1] == maxPrice) {
      if (filters?.price) removeFilter("price", filters?.price[0] || "");
      return;
    }
    if (!filters.price || filters?.price[0] !== newPrice.join("-"))
      updateFilter("price", priceConvert(newPrice).map(String));
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <Input
        value={price[0]}
        onChange={(e) => handlePriceChange(e.target.value, 0)}
        onBlur={(e) => onBlurHandler(e.target.value, 0)}
        className="w-20 rounded-sm focus-visible:ring-0 text-center"
        placeholder="min"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      —
      <Input
        value={price[1]}
        onChange={(e) => handlePriceChange(e.target.value, 1)}
        onBlur={(e) => onBlurHandler(e.target.value, 1)}
        className="w-20 rounded-sm focus-visible:ring-0 text-center"
        placeholder="max"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      грн
    </div>
  );
};

export default PriceInput;
