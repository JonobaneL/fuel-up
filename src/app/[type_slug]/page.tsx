import { Suspense } from "react";

import ActiveFilters from "./_components/ActiveFilters";
import Filters from "./_components/Filters";
import FiltersButton from "./_components/FiltersButton";
import ProductsList from "./_components/ProductsList";
import ProductsListSkeleton from "./_components/ProductsListSkeleton";
import SortSelect from "./_components/SortSelects";

import { getType } from "@/actions/paramsActions";

import { SearchParamsType } from "@/types/paramsTypes";

import PageWrapper from "@/components/PageWrapper";

type ProductsProps = {
  params: { type_slug: string };
  searchParams: SearchParamsType;
};
const Products = async ({ params, searchParams }: ProductsProps) => {
  const type = await getType(params.type_slug);

  return (
    <PageWrapper className="py-10 md:py-12">
      <section className="w-full mb-4">
        <ActiveFilters />
      </section>
      <section className="flex gap-5">
        <div className="hidden xl:block">
          <Filters slug={params.type_slug} />
        </div>
        <div className="w-full">
          <div className="flex xl:items-center justify-between mb-10 flex-col xl:flex-row gap-2">
            <h2 className="font-title text-2xl text-third">{type?.name}</h2>
            <div className="flex justify-between">
              <FiltersButton type_slug={params.type_slug} />

              <SortSelect />
            </div>
          </div>
          <Suspense fallback={<ProductsListSkeleton />}>
            <ProductsList
              type_slug={params.type_slug}
              searchParams={searchParams}
            />
          </Suspense>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Products;
