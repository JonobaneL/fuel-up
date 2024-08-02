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
  return prisma.type.findUnique({
    where: {
      slug: type_slug,
    },
    include: {
      subTypes: true,
    },
  });
};
export const getAllSpeedTypes = () => {
  return prisma.speedType.findMany();
};
export const getAllBrands = () => {
  return prisma.brand.findMany();
};
export const getAllFlavours = () => {
  return prisma.flavour.findMany();
};
export const getCountries = () => {
  return prisma.country.findMany();
};
