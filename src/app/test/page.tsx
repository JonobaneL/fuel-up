"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductCarousel from "@/components/ProductCarousel";
import ProductInfo from "@/components/ProductInfo";

const Test = () => {
  return (
    <main className="mb-14 mt-10">
      <section>
        <ProductBreadcrumb />
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

export default Test;
