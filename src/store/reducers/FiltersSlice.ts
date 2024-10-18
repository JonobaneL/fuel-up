"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FiltersKeys } from "@/types/filtersTypes";

type FilterType = Partial<Record<FiltersKeys, string[]>>;

type initialStateParams = Partial<Record<FiltersKeys, string[]>>;

const initialState: initialStateParams = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateAllFiltersAction(_, action) {
      return action.payload;
    },
    updateFilterAction(state, action: PayloadAction<FilterType>) {
      return { ...state, ...action.payload };
    },
    clearFiltersState() {
      return {};
    },
  },
});

export const { updateAllFiltersAction, updateFilterAction, clearFiltersState } =
  filtersSlice.actions;

export default filtersSlice.reducer;
