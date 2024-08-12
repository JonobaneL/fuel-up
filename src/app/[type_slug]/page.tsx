import { getType } from "@/actions/paramsActions";
import { getProducts } from "@/actions/productsAction";
import ActiveFilters from "@/components/ActiveFilters";
import Filters from "@/components/Filters";
import ProductCart from "@/components/ProductCart";
import SortSelect from "@/components/SortSelects";
import { SearchParams } from "@/models/paramsTypes";
import Link from "next/link";

type ProductsProps = {
  params: { type_slug: string };
  searchParams: SearchParams;
};
const Products = async ({ params, searchParams }: ProductsProps) => {
  const type = await getType(params.type_slug);
  const products = await getProducts(params.type_slug, searchParams);
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
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
            {products.map((item) => (
              <Link href={`${params.type_slug}/${item.slug}`}>
                <ProductCart key={item.id} product={item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
