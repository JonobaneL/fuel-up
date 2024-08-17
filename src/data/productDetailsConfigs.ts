export const favoriteProductConfig = {
  id: true,
  name: true,
  slug: true,
  brand: true,
  type: {
    select: {
      slug: true,
    },
  },
  flavours: {
    take: 1,
    where: {
      amount: {
        gt: 0,
      },
    },
    include: {
      flavour: true,
    },
  },
  images: {
    where: {
      main: true,
    },
  },
};
export const shoppingCartProductConfig = (flavour: string) => ({
  id: true,
  name: true,
  slug: true,
  brand: true,
  type: {
    select: {
      slug: true,
    },
  },
  flavours: {
    where: {
      flavour: {
        slug: flavour,
      },
    },
    include: {
      flavour: true,
    },
  },
  images: {
    where: {
      main: true,
    },
  },
});
export const allProductsRequestConfig = {
  select: {
    id: true,
    name: true,
    slug: true,
    brand: {
      select: {
        name: true,
      },
    },
    type: {
      select: {
        slug: true,
      },
    },
    flavours: {
      take: 1,
      where: {
        amount: { gt: 0 },
      },
      select: {
        id: true,
        price: true,
        flavour: true,
        discount: true,
      },
    },
    images: {
      where: {
        main: true,
      },
      select: {
        url: true,
      },
    },
  },
};
