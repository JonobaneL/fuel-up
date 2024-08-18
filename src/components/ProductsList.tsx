import { getProducts } from "@/actions/productsAction";
import { SearchParamsType } from "@/models/paramsTypes";
import Link from "next/link";
import ProductCart from "./ProductCart";

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
        <Link
          key={item.id}
          className="w-full"
          href={`${type_slug}/${item.slug}?flavour=${item.flavours[0].flavour.slug}`}
        >
          <ProductCart product={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
