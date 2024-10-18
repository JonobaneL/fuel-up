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
export type CheckoutFormParams = {
  fullname: string;
  phone: string;
  email: string;
  city: string;
  delivery: string;
  address: string;
  comment: string;
};
