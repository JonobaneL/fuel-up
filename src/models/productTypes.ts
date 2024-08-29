import {
  ParamProps,
  ProductFlavorParams,
  ProductImageParams,
} from "./paramsTypes";

export type ProductParams = {
  id: string;
  slug: string;
  name: string;
  brand: ParamProps;
  type: ParamProps;
  speedType?: ParamProps;
  formType?: ParamProps;
  flavours: ProductFlavorParams[];
  images: ProductImageParams[];
};

export type ProductCardProps = {
  product: ProductParams;
};
