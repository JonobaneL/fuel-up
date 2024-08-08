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

type Param = {
  key: string;
  value: string[];
};
const Test = () => {
  console.log("render");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [first, setFirst] = useState<Param>({
    key: "first",
    value: [],
  });
  const [second, setSecond] = useState<Param>({
    key: "second",
    value: [],
  });

  const test_arr = ["value 1", "value 2", "value 3"];
  const [test, setTest] = useState<string[]>();
  // const [test, setTest] = useQueryParams("arr");
  // console.log("check search params = ", test);
  const handler = (key: string) => {
    const params = new URLSearchParams(searchParams);
    const checkParam = searchParams.has(key);
    let firstParams: string[] = [];
    if (checkParam) {
      firstParams = params.get(key)?.split(",") || [];
      params.delete(key);
    }
    const randomNumber = Math.floor(Math.random() * 11);
    firstParams.push(`${key}-${randomNumber}`);
    console.log(firstParams);
    console.log(params);
    params.set(key, firstParams.join(","));
    console.log(params.toString().replace(/%2C/g, ","));
    router.replace(`${pathname}?${params.toString().replace(/%2C/g, ",")}`, {
      scroll: false,
    });
  };

  return (
    <main className="mb-14 mt-10">
      <div className="flex gap-4">
        <Button onClick={() => handler("first")}>first</Button>
        <Button onClick={() => handler("second")}>second</Button>
      </div>
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
