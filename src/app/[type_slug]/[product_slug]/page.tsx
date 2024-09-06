import { getProductDetails, getProductRate } from "@/actions/productAction";
import CommonInfo from "@/components/CommonInfo";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductCarousel from "@/components/ProductCarousel";
import ProductInfo from "@/components/ProductInfo";
import ProductReviews from "@/components/ProductReviews";

type ProductPageProps = {
  params: { product_slug: string };
  searchParams: { flavour: string };
};
const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const product = await getProductDetails(params.product_slug);
  return (
    <main className="mb-14 mt-10">
      <section>
        <ProductBreadcrumb type={product?.type} brand={product?.brand.name} />
      </section>
      <section className="flex gap-12 mt-10">
        <div className="w-1/2">
          <ProductCarousel images={product?.images} />
        </div>
        <div className="w-1/2">
          <ProductInfo
            product_slug={params.product_slug}
            flavour_slug={searchParams?.flavour || null}
          />
          <CommonInfo product={product} />
        </div>
      </section>
      <section className="flex gap-12 mt-10">
        <div className="w-3/5">
          <h2 className="font-title text-primary text-3xl mb-8">Опис</h2>
          <div
            dangerouslySetInnerHTML={{ __html: product?.description || "" }}
          />
        </div>
        <div className="w-2/5">
          <ProductReviews
            product_slug={product?.slug}
            reviews={product?.reviews}
          />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
