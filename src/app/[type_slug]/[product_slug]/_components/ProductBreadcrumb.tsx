import Link from "next/link";

import { TypeParams } from "@/types/paramsTypes";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbsProps = {
  type: TypeParams | undefined;
  brand: string | undefined;
};

const ProductBreadcrumb = ({ type, brand }: BreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Головна</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {type?.parent && (
          <>
            <BreadcrumbItem>
              <Link href={`/${type?.parent?.slug}`}>{type?.parent?.name}</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <Link href={`/${type?.slug}`}>{type?.name}</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{brand}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ProductBreadcrumb;
