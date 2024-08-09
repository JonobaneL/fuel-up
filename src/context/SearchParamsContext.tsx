"use client";

import { DynamicParams } from "@/models/paramsTypes";
import { deserialize } from "@/utils/searchParamsUtils";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { createContext, useContext, useState } from "react";

type SearchParamsProviderParams = {
  searchParams: ReadonlyURLSearchParams | URLSearchParams;
  setSearchParams: React.Dispatch<
    React.SetStateAction<ReadonlyURLSearchParams | URLSearchParams>
  >;
  getSearchParams: () => {};
  updateSearchParams: (key: string | null, value?: string) => void;
};
type ProviderProps = {
  children: React.ReactNode;
};

const SearchParamsContext = createContext<SearchParamsProviderParams | null>(
  null
);
export const useSearchParamsContext = () => {
  return useContext(SearchParamsContext) as SearchParamsProviderParams;
};

export const SearchParamsProvider = ({ children }: ProviderProps) => {
  const initialSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchParams, setSearchParams] = useState<
    ReadonlyURLSearchParams | URLSearchParams
  >(initialSearchParams);
  const getSearchParams = (): DynamicParams => {
    let params = {};
    searchParams.forEach((item, key) => {
      params = Object.assign({ [key]: deserialize(item) }, params);
    });
    return params;
  };
  const updateSearchParams = (key: string | null, value?: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (key == null) {
      router.replace(pathname);
      searchParams.forEach((_, key) => {
        newSearchParams.delete(key);
      });
      setSearchParams(newSearchParams);
      // searchParams.keys();
    }
    // newSearchParams.delete(key, value);
  };
  return (
    <SearchParamsContext.Provider
      value={{
        searchParams,
        setSearchParams,
        getSearchParams,
        updateSearchParams,
      }}
    >
      {children}
    </SearchParamsContext.Provider>
  );
};
