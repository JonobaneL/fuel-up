import { getType } from "@/actions/paramsActions";
import ActiveFilters from "@/components/ActiveFilters";
import Filters from "@/components/Filters";
import ProductsList from "@/components/ProductsList";
import SortSelect from "@/components/SortSelects";
import ProductsListSkeleton from "@/components/ui/ProductsListSkeleton";
import { SearchParamsType } from "@/models/paramsTypes";
import { Suspense } from "react";

type ProductsProps = {
  params: { type_slug: string };
  searchParams: SearchParamsType;
};
const Products = async ({ params, searchParams }: ProductsProps) => {
  const type = await getType(params.type_slug);
  return (
    <main className="my-14">
      <section className="w-full mb-4">
        <ActiveFilters />
      </section>
      <section className="flex gap-5">
        <Filters slug={params.type_slug} />
        <div className="w-full">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-title text-2xl text-third">{type?.name}</h2>
            <SortSelect />
          </div>
          <Suspense fallback={<ProductsListSkeleton />}>
            <ProductsList
              type_slug={params.type_slug}
              searchParams={searchParams}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Products;
