import { ProductReview } from "@/types/paramsTypes";

import Rate from "@/components/ui/Rate";
import { convertDate } from "@/utils/dateConvert";

type ReviewProps = {
  review: ProductReview;
};

const Review = ({ review }: ReviewProps) => {
  const reviewDate = convertDate(review.createdAt);

  return (
    <div>
      <div className="flex items-center justify-between pb-2 border-b mb-2">
        <p className="font-semibold text-third">{review.author}</p>
        <p className="text-gray-600 text-sm">{reviewDate}</p>
      </div>
      <Rate rate={review.rate} />
      <p className="mt-2 text-sm">{review.content}</p>
    </div>
  );
};

export default Review;
