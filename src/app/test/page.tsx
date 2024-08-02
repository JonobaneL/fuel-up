"use client";
import { Button } from "@/components/ui/button";
// import ProductBreadcrumb from "@/components/ProductBreadcrumb";
// import ProductInfo from "@/components/ProductInfo";
import CheckboxList from "@/components/ui/CheckboxList";
import { useLatest } from "@/hooks/useLatest";
import { useQueryParams } from "@/hooks/useQueryParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";

const Test = () => {
  console.log("render");

  const test_arr = ["value 1", "value 2", "value 3"];

  const [test, setTest] = useQueryParams("arr");
  // console.log("check search params = ", test);
  const handler = (value: unknown) => {
    // const name = searchParams.get("name");
    // console.log("check", name);
    // setFilters((p) => {
    //   if (p.includes(value as string))
    //     return p.filter((item) => item !== value);
    //   return [...p, value as string];
    // });
  };
  // console.log(filters);
  return (
    <main className="mb-14 mt-10">
      <CheckboxList
        data={test_arr}
        maxLimit={100}
        callback={(value) => handler(value)}
      />
      <Button onClick={() => setTest(["check2", "some", "third"])}>
        Check
      </Button>
      <Button onClick={() => setTest(["Nike", "Addidas", "Puma"])}>
        Check
      </Button>
      <Button onClick={() => setTest([])}>delete</Button>
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
