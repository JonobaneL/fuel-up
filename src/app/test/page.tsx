"use client";
// import ProductBreadcrumb from "@/components/ProductBreadcrumb";
// import ProductInfo from "@/components/ProductInfo";
import CheckboxList from "@/components/ui/CheckboxList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";

const Test = () => {
  const test_arr = ["value 1", "value 2", "value 3"];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<string[]>([]);
  const handler = (value: unknown) => {
    const params = new URLSearchParams(searchParams);
    params.set("name", value as string);
    console.log(params.toString());

    router.push(`${pathname}?${params.toString()}`);
    // const name = searchParams.get("name");
    // console.log("check", name);
    // setFilters((p) => {
    //   if (p.includes(value as string))
    //     return p.filter((item) => item !== value);
    //   return [...p, value as string];
    // });
  };
  console.log(filters);
  return (
    <main className="mb-14 mt-10">
      <CheckboxList
        data={test_arr}
        maxLimit={100}
        callback={(value) => handler(value)}
      />
    </main>
    // <main className="mb-14 mt-10">
    //   <section>
    //     <ProductBreadcrumb />
    //   </section>
    //   <section className="flex gap-12 mt-10">
    //     <div className="flex gap-2 w-1/2">
    //       <div className="flex flex-col gap-2">
    //         <Image
    //           src="/product-img1.jpg"
    //           alt="product-img"
    //           className="size-20 p-1 border border-primary rounded-sm"
    //           width={80}
    //           height={80}
    //         />
    //         <Image
    //           src="/product-img2.jpg"
    //           alt="product-img"
    //           className="size-20 p-1 "
    //           width={80}
    //           height={80}
    //         />
    //       </div>
    //       <div>
    //         <Image
    //           src="/product-img1.jpg"
    //           alt="product-img"
    //           width={550}
    //           height={550}
    //         />
    //       </div>
    //     </div>
    //     <div className="w-1/2">
    //       <ProductInfo />
    //     </div>
    //   </section>
    // </main>
  );
};

export default Test;
