"use client";
import { deserialize } from "@/utils/searchParamsUtils";
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearhcParams,
} from "next/navigation";
import { useLayoutEffect } from "react";
import { useTypeDispatch, useTypeSelector } from "./useTypedReduxHooks";
import {
  updateFilterAction,
  updateFiltersAction,
} from "@/store/reducers/FiltersSlice";
import { useSearchParams } from "./useSearchPrams";
import { FiltersKeys } from "@/models/filtersTypes";

export const useFilters = () => {
  const initialSearchParams = useNextSearhcParams();
  const filters = useTypeSelector((state) => state.filters);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useTypeDispatch();
  //move this useEffect to StoreProvider
  useLayoutEffect(() => {
    initialSearchParams.forEach((item, key) => {
      const filter = { [key]: deserialize(key, item) };
      dispatch(updateFilterAction(filter));
    });
  }, []);
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
    dispatch(updateFiltersAction(rest));
  };
  const clearFilters = () => {
    router.replace(pathname);
    dispatch(updateFiltersAction({}));
  };
  return { updateFilter, removeFilter, clearFilters };
};
