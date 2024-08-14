"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

type ReviewParams = {
  author: string;
  email: string;
  rate: number;
  content: string;
};

export const addReview = async (
  review: ReviewParams,
  product_slug: string,
  pathname: string
) => {
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
  revalidatePath(pathname);
};
