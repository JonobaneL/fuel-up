"use server";

import prisma from "@/lib/db";

type ReviewParams = {
  author: string;
  email: string;
  rate: number;
  advantages: string | null;
  disadvantages: string | null;
  content: string;
};

export const addReview = async (review: ReviewParams, product_slug: string) => {
  await prisma.review.create({
    data: {
      ...review,
      Product: {
        connect: {
          slug: product_slug,
        },
      },
    },
  });
};
