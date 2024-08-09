import Filters from "@/components/Filters";
import ProductCart from "@/components/ProductCart";
import SortSelect from "@/components/SortSelects";
import { SearchParams } from "@/models/paramsTypes";
import { getType } from "@/requests/params";
import { getProducts } from "@/requests/products";

type ProductsProps = {
  params: { product: string };
  searchParams: SearchParams;
};
const Products = async ({ params, searchParams }: ProductsProps) => {
  console.log(searchParams);
  const type = await getType(params.product);
  const products = await getProducts(params.product, searchParams);
  return (
    <main className="my-14">
      <section className="flex gap-5">
        <Filters slug={params.product} />
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-title text-2xl text-third">{type?.name}</h2>
            <SortSelect />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
            {products.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
