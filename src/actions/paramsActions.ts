"use server";
import prisma from "@/lib/db";

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
export const getBrands = (name: string = "") => {
  return prisma.brand.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
};
export const getAllFlavours = () => {
  return prisma.flavour.findMany();
};
export const getCountries = () => {
  return prisma.country.findMany();
};
