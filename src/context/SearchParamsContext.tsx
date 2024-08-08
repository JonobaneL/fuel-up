"use client";

import { deserialize } from "@/utils/searchParamsUtils";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { createContext, useContext, useState } from "react";

type SearchParamsProviderParams = {
  searchParams: ReadonlyURLSearchParams | URLSearchParams;
  setSearchParams: React.Dispatch<
    React.SetStateAction<ReadonlyURLSearchParams | URLSearchParams>
  >;
  getSearchParams: () => {};
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
  const [searchParams, setSearchParams] = useState<
    ReadonlyURLSearchParams | URLSearchParams
  >(initialSearchParams);
  const getSearchParams = () => {
    let params = {};
    searchParams.forEach((item, key) => {
      params = Object.assign({ [key]: deserialize(item) }, params);
    });
    return params;
  };
  return (
    <SearchParamsContext.Provider
      value={{ searchParams, setSearchParams, getSearchParams }}
    >
      {children}
    </SearchParamsContext.Provider>
  );
};
