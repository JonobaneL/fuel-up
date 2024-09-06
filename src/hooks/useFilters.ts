"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTypeDispatch, useTypeSelector } from "./useTypedReduxHooks";
import {
  updateFilterAction,
  updateAllFiltersAction,
} from "@/store/reducers/FiltersSlice";
import { useSearchParams } from "./useSearchPrams";
import { FiltersKeys } from "@/models/filtersTypes";

export const useFilters = () => {
  const filters = useTypeSelector((state) => state.filters);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useTypeDispatch();
  const updateSearchParams = useSearchParams();

  const updateFilter = (paramName: FiltersKeys, value: string | string[]) => {
    let updatedFilter = [];
    const currentFilter = filters[paramName] || [];
    if (Array.isArray(value)) {
      updatedFilter = paramName == "price" ? [value.join("-")] : value;
    } else {
      updatedFilter = currentFilter.includes(value)
        ? currentFilter.filter((item) => item !== value)
        : [...currentFilter, value];
    }
    updateSearchParams(paramName, updatedFilter);
    dispatch(updateFilterAction({ [paramName]: updatedFilter }));
  };

  const removeFilter = (paramName: FiltersKeys, value: string) => {
    const currentFilter = filters[paramName] || [];
    const updatedFilter = currentFilter.filter((item) => item !== value);
    updateSearchParams(paramName, updatedFilter);
    if (updatedFilter.length) {
      dispatch(updateFilterAction({ [paramName]: updatedFilter }));
      return;
    }
    const { [paramName]: _, ...rest } = filters;
    dispatch(updateAllFiltersAction(rest));
  };
  const clearFilters = () => {
    router.replace(pathname);
    dispatch(updateAllFiltersAction({}));
  };
  return { updateFilter, removeFilter, clearFilters };
};
