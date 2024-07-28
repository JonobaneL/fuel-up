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
