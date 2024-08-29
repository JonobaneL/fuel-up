import { ProductParams } from "@/models/productTypes";

export const generateProductLink = (product: ProductParams | null) => {
  if (!product) return "";
  const productLink = `/${product?.type.slug}/${product?.slug}`;
  if (product?.flavours[0].flavour) {
    return productLink + `?flavour=${product?.flavours[0].flavour?.slug}`;
  }
  return productLink;
};
