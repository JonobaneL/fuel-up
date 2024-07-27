import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export const getMainTypes = () => {
  return prisma.type.findMany({
    where: {
      parent: null,
    },
    include: {
      subTypes: true,
    },
  });
};
export const getType = (type_slug: string) => {
  // if (type_slug == "products")
  //   return new Promise((res, rej) => res({ name: "Товари", subTypes: [] }));
  return prisma.type.findUnique({
    where: {
      slug: type_slug,
    },
    include: {
      subTypes: true,
    },
  });
};
