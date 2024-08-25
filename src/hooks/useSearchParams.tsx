"use client";
import { serialize } from "@/utils/searchParamsUtils";
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import { useCallback } from "react";

export const useSearchParams = () => {
  const initialSearchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const updateSearchParams = useCallback(
    (paramName: string, newValue: string[]) => {
      const newParams = new URLSearchParams(initialSearchParams);
      if (newValue.length == 0) {
        newParams.delete(paramName);
      } else {
        const serializedValue = serialize(paramName, newValue);
        newParams.set(paramName, serializedValue);
      }
      router.replace(
        `${pathname}?${newParams.toString().replace(/%2C/g, ",")}`,
        {
          scroll: false,
        }
      );
    },
    [pathname, initialSearchParams.keys()]
  );
  return updateSearchParams;
};
