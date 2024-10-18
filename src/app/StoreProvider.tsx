"use client";

import { ReactNode, useEffect, useRef } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  clearFiltersState,
  updateFilterAction,
} from "@/store/reducers/FiltersSlice";

import { AppStore, createStore } from "@/store";
import { deserialize } from "@/utils/searchParamsUtils";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  const initialSearchParams = useSearchParams();
  const pathname = usePathname();

  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  useEffect(() => {
    if (storeRef.current) {
      storeRef.current?.store.dispatch(clearFiltersState());
      initialSearchParams.forEach((item, key) => {
        const filter = { [key]: deserialize(key, item) };
        storeRef.current?.store.dispatch(updateFilterAction(filter));
      });
    }
  }, [pathname, initialSearchParams]);

  return (
    <PersistGate loading={null} persistor={storeRef.current.persistedStore}>
      <Provider store={storeRef.current.store}>{children}</Provider>
    </PersistGate>
  );
};

export default StoreProvider;
