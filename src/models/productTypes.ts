import {
  ParamProps,
  ProductFlavorParams,
  ProductImageParams,
} from "./paramsTypes";

export type ProductParams = {
  id: string;
  slug: string;
  name: string;
  brand: Partial<ParamProps>;
  type: Partial<ParamProps>;
  speedType?: Partial<ParamProps>;
  formType?: Partial<ParamProps>;
  flavours: ProductFlavorParams[];
  images: ProductImageParams[];
};

export type ProductCardProps = {
  product: ProductParams;
};
