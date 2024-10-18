"use client";

import { useState } from "react";

import Review from "./Review";
import ReviewForm from "./ReviewForm";

import { ProductReview } from "@/types/paramsTypes";

import { Button } from "@/components/ui/button";

type ProductReviewsProps = {
  product_slug: string | undefined;
  reviews: ProductReview[] | undefined;
};

const ProductReviews = ({
  product_slug = "",
  reviews,
}: ProductReviewsProps) => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-title text-primary text-2xl ">
          Відгуки покупців{" "}
          <span className="text-third">{reviews?.length || 0}</span>
        </h2>
        {reviews?.length ? (
          <Button
            onClick={() => setFormVisible(true)}
            className="text-white rounded-none font-semibold h-10 shadow-md"
          >
            Додати відгук
          </Button>
        ) : null}
      </div>
      {isFormVisible && (
        <ReviewForm
          product_slug={product_slug}
          closeCallback={() => setFormVisible(false)}
        />
      )}
      {reviews?.length ? (
        <div className="space-y-4 mt-5">
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
