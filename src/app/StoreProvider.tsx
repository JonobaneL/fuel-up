"use client";
import { persistedStore, store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PersistGate loading={null} persistor={persistedStore}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default StoreProvider;
