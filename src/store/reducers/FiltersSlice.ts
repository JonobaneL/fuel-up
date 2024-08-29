"use client";

import { FiltersKeys } from "@/models/filtersTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterType = Partial<Record<FiltersKeys, string[]>>;
type initialStateParams = Partial<Record<FiltersKeys, string[]>>;
const initialState: initialStateParams = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFiltersAction(state, action) {
      return action.payload;
    },
    updateFilterAction(state, action: PayloadAction<FilterType>) {
      return { ...state, ...action.payload };
    },
  },
});
export const { updateFiltersAction, updateFilterAction } = filtersSlice.actions;

export default filtersSlice.reducer;
