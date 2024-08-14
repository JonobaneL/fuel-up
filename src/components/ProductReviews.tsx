import { ProductReview } from "@/models/paramsTypes";
import ReviewForm from "./ReviewForm";
import { Button } from "./ui/button";
import Review from "./Review";

type ProductReviewsProps = {
  product_slug: string | undefined;
  reviews: ProductReview[] | undefined;
};

const ProductReviews = ({
  product_slug = "",
  reviews,
}: ProductReviewsProps) => {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="font-title text-primary text-2xl ">
          Відгуки покупців{" "}
          <span className="text-third">{reviews?.length || 0}</span>
        </h2>
        {reviews?.length ? (
          <Button className="text-white rounded-none font-semibold h-10 shadow-md">
            Додати відгук
          </Button>
        ) : null}
      </div>

      {reviews?.length ? (
        <div className="space-y-4">
          {reviews?.map((item) => (
            <Review key={item.id} review={item} />
          ))}
        </div>
      ) : (
        <ReviewForm product_slug={product_slug} />
      )}
    </>
  );
};

export default ProductReviews;
