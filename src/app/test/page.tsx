"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductCarousel from "@/components/ProductCarousel";
import ProductInfo from "@/components/ProductInfo";
import { Button } from "@/components/ui/button";
import CheckboxList from "@/components/ui/CheckboxList";
import { Skeleton } from "@/components/ui/skeleton";
import { useFilters } from "@/hooks/useFilters";
import { useTypeSelector } from "@/hooks/useTypedReduxHooks";
import { useState } from "react";

const Test = () => {
  const [rate, setRate] = useState(0);
  const [isHover, setIsHover] = useState(0);
  const filters = useTypeSelector((state) => state.filters);
  const { updateFilter, removeFilter, clearFilters } = useFilters();

  const data1 = [
    { id: "check1", name: "Option 1", slug: "option_1" },
    { id: "check2", name: "Option 2", slug: "option_2" },
    { id: "check3", name: "Option 3", slug: "option_3" },
  ];
  const data2 = [
    { id: "country1", name: "country 1", slug: "country_1" },
    { id: "country2", name: "country 2", slug: "country_2" },
    { id: "country3", name: "country 3", slug: "country_3" },
  ];
  // console.log(filters);
  return (
    <main className="mb-14 mt-10">
      <div>
        <CheckboxList
          data={data1}
          checked={filters["brand"]}
          callback={(value) => updateFilter("brand", value)}
        />
        <br />
        <br />
        <CheckboxList
          data={data2}
          checked={filters["country"]}
          callback={(value) => updateFilter("country", value)}
        />
        <br />
        <br />
        <div className="flex gap-5">
          <Button
            variant="outline"
            onClick={() => removeFilter("brand", "option_1")}
          >
            Remove option 1
          </Button>
          <Button
            variant="outline"
            onClick={() => removeFilter("country", "country_2")}
          >
            Remove coutry 2
          </Button>
          <Button
            variant="outline"
            onClick={() => updateFilter("price", ["300", "2400"])}
          >
            Add Price
          </Button>
          <Button
            variant="outline"
            onClick={() => updateFilter("speedType", ["speedType_1"])}
          >
            Add sort
          </Button>

          <Button variant="outline" onClick={() => clearFilters()}>
            Clear Filters
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Test;
