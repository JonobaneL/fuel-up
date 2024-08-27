export type ProductCartParams = {
  slug: string;
  name: string;
  brand: {
    name: string;
  };
  type: {
    slug: string;
  };
  flavours: {
    flavour: {
      name: string;
      slug: string;
    }|null;
    price: number;
    discount: number | null;
  }[];
  images: { url: string }[];
};

export type ProductCartProps = {
  product: ProductCartParams;
};
// export type BriefProductInfoType = {
//   id: string;
//   name: string;
//   slug: string;
//   brand: {
//     name: string;
//   };
//   type: {
//     slug: string;
//   };
//   flavours: {
//     flavour: {
//       name: string;
//       slug: string;
//     };
//     discount: number | null;
//     price: number;
//   }[];
//   images: { url: string }[];
//   quantity: number;
// };

// const product = {
//   id: "product1",
//   name: "ProductName",
//   slug: "product_slug",
//   brand: {
//     name: "ProductBrand",
//     slug: "brand_slug",
//   },
//   type: {
//     name: "ProductType",
//     slug: "type_slug",
//   },
//   flavours: [
//     {
//       flavour: {
//         name: "FlavourName1",
//         slug: "flavour_slug1",
//       },
//       discount: null,
//       price: 200.99,
//     },
//     {
//       flavour: {
//         name: "FlavourName2",
//         slug: "flavour_slug2",
//       },
//       discount: 10,
//       price: 199.99,
//     },
//   ],
//   images: [
//     {
//       url: "https://example.com/image.jpg",
//     },
//   ],
// };
