"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

import favoritesReducer from "./reducers/FavoritesSlice";
import filtersReducer from "./reducers/FiltersSlice";
import shoppingCartReducer from "./reducers/ShoppingCartSlice";

//check if we this piece of code later
function createPersistStore() {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["filters"],
};
//end
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  shoppingCart: shoppingCartReducer,
  filters: filtersReducer,
});
//strat
const persistedReducer = persistReducer(persistConfig, rootReducer);
//end
export const createStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  const persistedStore = persistStore(store);
  return { store, persistedStore };
};
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["store"]["getState"]>;
export type AppDispatch = AppStore["store"]["dispatch"];
