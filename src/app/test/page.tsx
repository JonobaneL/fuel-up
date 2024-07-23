import Filters from "@/components/Filters";
import ProductCart from "@/components/ProductCart";
import SortSelect from "@/components/SortSelects";

const Test = () => {
  return (
    <div className="my-14">
      <h1 className="mb-10">Test page</h1>
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
    </div>
  );
};

export default Test;
