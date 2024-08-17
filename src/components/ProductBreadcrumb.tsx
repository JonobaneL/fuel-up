import { TypeParams } from "@/models/paramsTypes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Link from "next/link";

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
