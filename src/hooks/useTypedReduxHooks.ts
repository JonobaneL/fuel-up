import { useDispatch, useSelector, useStore } from "react-redux";

import { AppDispatch, AppStore, RootState } from "@/store";

export const useTypeDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypeSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore["store"]>();
