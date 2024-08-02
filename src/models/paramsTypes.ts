export type Category = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
};
export type CategoryWithSub = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  subTypes: Category[];
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
