"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CartProductType } from "@/models/ShoppingCartTypes";

type initialStateProps = CartProductType[];
type ActionProps = {
  product_slug: string;
  flavour: string;
};
const initialState: initialStateProps = [];

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ActionProps>) {
      const { product_slug, flavour } = action.payload;
      const productCheck = state.find(
        (item) => item.slug === product_slug && item.flavour === flavour
      );
      if (productCheck) {
        return state.map((item) => {
          if (item.slug === product_slug && item.flavour === flavour)
            return { ...item, quantity: item.quantity + 1 };
          return item;
        });
      }
      state.push({ slug: product_slug, flavour, quantity: 1 });
    },
    removeProduct(state, action: PayloadAction<ActionProps>) {
      const { product_slug, flavour } = action.payload;
      return state.filter(
        (item) => item.slug !== product_slug && item.flavour !== flavour
      );
    },
    increaseProductAmount(state, action: PayloadAction<ActionProps>) {
      const { product_slug, flavour } = action.payload;
      return state.map((item) => {
        if (item.slug === product_slug && item.flavour === flavour)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    },
    decreaseProductAmount(state, action: PayloadAction<ActionProps>) {
      const { product_slug, flavour } = action.payload;
      return state
        .map((item) => {
          if (item.slug === product_slug && item.flavour === flavour)
            return { ...item, quantity: item.quantity - 1 };
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
  },
});

export const getCartAmount = (state: RootState) =>
  state.shoppingCart.reduce((prev, item) => prev + item.quantity, 0);
export const {
  addProduct,
  removeProduct,
  decreaseProductAmount,
  increaseProductAmount,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
