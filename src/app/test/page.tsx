import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductInfo from "@/components/ProductInfo";
import Image from "next/image";

const Test = () => {
  return (
    <main className="mb-14 mt-10">
      <section>
        <ProductBreadcrumb />
      </section>
      <section className="flex gap-12 mt-10">
        <div className="flex gap-2 w-1/2">
          <div className="flex flex-col gap-2">
            <Image
              src="/product-img1.jpg"
              alt="product-img"
              className="size-20 p-1 border border-primary rounded-sm"
              width={80}
              height={80}
            />
            <Image
              src="/product-img2.jpg"
              alt="product-img"
              className="size-20 p-1 "
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src="/product-img1.jpg"
              alt="product-img"
              width={550}
              height={550}
            />
          </div>
        </div>
        <div className="w-1/2">
          <ProductInfo />
        </div>
      </section>
    </main>
  );
};

export default Test;
