"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";

type initialStateProps = string[];
const initialState: initialStateProps = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      if (state.includes(action.payload)) {
        return state.filter((item) => item !== action.payload);
      }
      state.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const checkFavorites = (state: RootState, productId: string) =>
  state.favorites.includes(productId);

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
