import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useLatest } from "./useLatest";

const serialize = (value: string[]) => {
  return value.join(",");
};
const deserialize = (value: string | null) => {
  if (value == null) return [];
  return value.split(",");
};
type CallbackParams = (value: string[]) => string[];
type SetterParams = (value: string[] | CallbackParams) => void;

export const useQueryParams = (paramName: string): [string[], SetterParams] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initial = deserialize(searchParams.get(paramName));
  const [value, setValue] = useState<string[]>(initial);
  const params = new URLSearchParams(searchParams);
  const latestValue = useLatest(value);
  const updateValue = useCallback(
    (newValue: string[] | CallbackParams) => {
      const actualValue =
        typeof newValue == "function"
          ? newValue(latestValue.current as string[])
          : newValue;

      setValue(actualValue);
      if (actualValue.length == 0) {
        params.delete(paramName);
      } else {
        const serializedValue = serialize(actualValue);
        params.set(paramName, serializedValue);
      }
      router.replace(`${pathname}?${params.toString().replace(/%2C/g, ",")}`, {
        scroll: false,
      });
    },
    [pathname]
  );

  return [value, updateValue];
};
