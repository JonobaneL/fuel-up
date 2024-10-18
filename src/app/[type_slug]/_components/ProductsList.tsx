import { getProducts } from "@/actions/productsAction";

import { SearchParamsType } from "@/types/paramsTypes";

import ProductCard from "@/components/ProductCard";

type ProductsListProps = {
  type_slug: string;
  searchParams: SearchParamsType;
};

const ProductsList = async ({ type_slug, searchParams }: ProductsListProps) => {
  const products = await getProducts(type_slug, searchParams);

  if (products.length == 0)
    return (
      <div>
        <p className="text-third font-title text-2xl">
          Не знайдено жодного товару
        </p>
        <p className="text-third">Спробуйте інші параметри</p>
      </div>
    );

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
