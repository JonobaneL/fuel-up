"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CartProductType } from "@/models/ShoppingCartTypes";

type initialStateProps = CartProductType[];
type ActionProps = {
  productId: string;
  flavourId: string;
};
const initialState: initialStateProps = [];

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ActionProps>) {
      const { productId, flavourId } = action.payload;
      const productCheck = state.find(
        (item) => item.productId === productId && item.flavourId === flavourId
      );
      if (productCheck) {
        return state.map((item) => {
          if (item.productId === productId && item.flavourId === flavourId)
            return { ...item, quantity: item.quantity + 1 };
          return item;
        });
      }
      state.push({ productId: productId, flavourId, quantity: 1 });
    },
    removeProduct(state, action: PayloadAction<ActionProps>) {
      const { productId, flavourId } = action.payload;
      return state.filter(
        (item) => item.productId !== productId && item.flavourId !== flavourId
      );
    },
    increaseProductAmount(state, action: PayloadAction<ActionProps>) {
      const { productId, flavourId } = action.payload;
      return state.map((item) => {
        if (item.productId === productId && item.flavourId === flavourId)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    },
    decreaseProductAmount(state, action: PayloadAction<ActionProps>) {
      const { productId, flavourId } = action.payload;
      return state
        .map((item) => {
          if (item.productId === productId && item.flavourId === flavourId)
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
