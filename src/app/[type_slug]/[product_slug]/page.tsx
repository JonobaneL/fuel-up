import { getProductDetails } from "@/actions/productAction";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductCarousel from "@/components/ProductCarousel";
import ProductInfo from "@/components/ProductInfo";

type ProductPageProps = {
  params: { product_slug: string };
};
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProductDetails(params.product_slug);
  console.log(product);
  return (
    <main className="mb-14 mt-10">
      <section>
        <ProductBreadcrumb type={product?.type} brand={product?.brand.name} />
      </section>
      <section className="flex gap-12 mt-10">
        <div className="w-1/2">
          <ProductCarousel />
        </div>
        <div className="w-1/2 ">
          <ProductInfo />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
