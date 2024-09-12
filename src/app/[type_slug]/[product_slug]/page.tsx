import { getProductDetails } from "@/actions/productAction";
import CommonInfo from "@/components/CommonInfo";
import PageWrapper from "@/components/PageWrapper";
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
    <PageWrapper className="mb-14 mt-10">
      <section>
        <ProductBreadcrumb type={product?.type} brand={product?.brand.name} />
      </section>
      <section className="flex gap-12 mt-10 md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <ProductCarousel images={product?.images} />
        </div>
        <div className="md:w-1/2 w-full">
          <ProductInfo
            product_slug={params.product_slug}
            flavour_slug={searchParams?.flavour || null}
          />
          <CommonInfo />
        </div>
      </section>
      <section className="flex gap-10 lg:gap-12 mt-10 flex-col md:flex-row">
        <div className="md:w-3/5 w-full">
          <h2 className="font-title text-primary text-3xl mb-8">Опис</h2>
          <div
            dangerouslySetInnerHTML={{ __html: product?.description || "" }}
          />
        </div>
        <div className="md:w-2/5 w-full">
          <ProductReviews
            product_slug={product?.slug}
            reviews={product?.reviews}
          />
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProductPage;
