import Filters from "@/components/Filters";
import ProductCart from "@/components/ProductCart";
import SortSelect from "@/components/SortSelects";
import { getType } from "@/requests/params";
import { getProducts } from "@/requests/products";

type ProductsProps = { params: { product: string } };
const Products = async ({ params }: ProductsProps) => {
  const type = await getType(params.product);
  const products = await getProducts(params.product);
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
              <ProductCart product={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
