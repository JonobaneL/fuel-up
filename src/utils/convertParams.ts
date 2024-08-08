import prisma from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import {
  DefaultArgs,
  PrismaClientOptions,
} from "@prisma/client/runtime/library";

export const convertParams = async (key: string, value: string[]) => {
  return prisma.flavour.findMany();
};
