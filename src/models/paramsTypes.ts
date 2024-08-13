export type TypeParams = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  parent?: TypeParams | null;
};
export type TypeParamsWithSub = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  subTypes: TypeParams[];
};

export type ParamProps = {
  id: string;
  name: string;
  slug: string;
};
export type SearchParams = {
  speed_type: string;
  brand: string;
  flavour: string;
  country: string;
};
export type DynamicParams = {
  [key: string]: string[];
};

export type FlavourParams = {
  id: string;
  name: string;
  slug: string;
};
export type ProductFlavorParams = {
  id: string;
  flavourId: string;
  price: number;
  discount: number | null;
  amount: number;
  flavour: FlavourParams;
};

export type ProductImageParams = {
  id: string;
  url: string;
  main: boolean | null;
};
