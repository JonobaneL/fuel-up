"use server";

import prisma from "@/lib/db";
import { PrismaClient } from "@prisma/client";

export const getFiltersInfo = async (paramName: string, params: string[]) => {
  return prisma[paramName as keyof PrismaClient].findMany({
    //check this later
    where: {
      slug: {
        in: params,
      },
    },
  });
};
