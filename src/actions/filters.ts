"use server";

import prisma from "@/lib/db";
import { PrismaClient } from "@prisma/client";

export const getFiltersInfo = async (paramName: string, params: string[]) => {
  if (paramName == "price") {
    if (params.length == 0) return new Promise((res, _) => res([]));
    return new Promise((res, rej) =>
      res([{ name: params[0], slug: params[0] }])
    );
  }

  return prisma[paramName as keyof PrismaClient].findMany({
    //check this later
    where: {
      slug: {
        in: params,
      },
    },
  });
};
