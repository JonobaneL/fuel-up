import Filters from "@/components/Filters";
import ProductCart from "@/components/ProductCart";
import SortSelect from "@/components/SortSelects";

const Products = () => {
  return (
    <main className="my-14">
      <section className="flex gap-5">
        <Filters />
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-title text-2xl text-third">Протеїни</h2>
            <SortSelect />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
