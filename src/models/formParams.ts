export type ReviewFormParams = {
  author: string;
  email: string;
  rate: number;
  content: string;
};
export type ReviewFormProps = {
  product_slug: string;
  closeCallback?: () => void;
};
