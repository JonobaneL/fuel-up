"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { useSearchParams } from "@/hooks/useSearchParams";
import { usePathname, useRouter } from "next/navigation";
//think up how to properly set up this slice

type FiltersKeys = "speedType" | "brand" | "flavour" | "price" | "country";

type UpdateFiltersProps = {
  paramName: FiltersKeys;
  value: string | string[];
};
type initialStateParams = {
  filters: Partial<Record<FiltersKeys, string[]>>;
  pathname: string;
};
const initialState: initialStateParams = {
  filters: {},
  pathname: "",
};

export const updateFilters = createAsyncThunk<
  Partial<Record<FiltersKeys, string[]>>,
  UpdateFiltersProps,
  { state: RootState }
>(
  "filter/updateFilters",
  async ({ paramName, value }, { getState, rejectWithValue }) => {
    try {
      const state = getState().filters;
      const updateSearchParams = useSearchParams();
      if (Array.isArray(value)) {
        updateSearchParams(paramName, [value.join("-")]);
        const filters = { ...state.filters, [paramName]: [value.join("-")] };
        return filters;
      }
      if (state.filters[paramName]?.includes(value)) {
        const filters = {
          ...state.filters,
          [paramName]: state.filters[paramName].filter(
            (item) => item !== value
          ),
        };
        updateSearchParams(
          paramName,
          state.filters[paramName].filter((item) => item !== value)
        );

        return filters;
      }
      const currentFilter = [...(state.filters[paramName] || []), value];
      updateSearchParams(paramName, currentFilter);
      return { ...state.filters, [paramName]: currentFilter.flat() };
    } catch (err) {
      console.error(err);
      return rejectWithValue("");
    }
  }
);
export const removeFilter = createAsyncThunk<
  Partial<Record<FiltersKeys, string[]>>,
  UpdateFiltersProps,
  { state: RootState }
>("filters/removeFilter", async ({ paramName, value }, { getState }) => {
  const state = getState().filters;
  const updateSearchParams = useSearchParams();
  if (!state.filters[paramName]) return state.filters;
  const currentFilter = state.filters[paramName].filter(
    (item) => item !== value
  );
  if (currentFilter.length) {
    const filters = {
      ...state.filters,
      [paramName]: currentFilter,
    };
    updateSearchParams(paramName, currentFilter);
    return filters;
  }
  const {
    [paramName]: {},
    ...rest
  } = state.filters;
  updateSearchParams(paramName, []);
  return rest;
});
export const clearFilters = createAsyncThunk<void>(
  "filtes/clearFilters",
  async () => {
    const router = useRouter();
    const pathname = usePathname();
    router.replace(pathname);
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearSearchParams(state) {
      return { ...state, filters: {} };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateFilters.fulfilled, (state, action) => {
        return { ...state, filters: action.payload };
      })
      .addCase(updateFilters.rejected, (state) => {
        console.log("error");
      })
      .addCase(removeFilter.fulfilled, (state, action) => {
        return { ...state, filters: action.payload };
      })
      .addCase(clearFilters.fulfilled, (state) => {
        return { ...state, filters: {} };
      });
  },
});

export default filtersSlice.reducer;
