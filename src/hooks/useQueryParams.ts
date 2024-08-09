import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useLatest } from "./useLatest";
import { useSearchParamsContext } from "@/context/SearchParamsContext";
import { deserialize, serialize } from "@/utils/searchParamsUtils";

type CallbackParams = (value: string[]) => string[];
type SetterParams = (value: string[] | CallbackParams) => void;

export const useQueryParams = (paramName: string): [string[], SetterParams] => {
  const router = useRouter();
  const pathname = usePathname();
  const { searchParams, setSearchParams } = useSearchParamsContext();
  const initial = deserialize(searchParams.get(paramName));
  const [value, setValue] = useState<string[]>(initial);
  const latestValue = useLatest(value);
  const updateValue = useCallback(
    (newValue: string[] | CallbackParams) => {
      const actualValue =
        typeof newValue == "function"
          ? newValue(latestValue.current as string[])
          : newValue;

      setValue(actualValue);
      const newParams = new URLSearchParams(searchParams);

      if (actualValue.length == 0) {
        newParams.delete(paramName);
      } else {
        const serializedValue = serialize(actualValue);
        newParams.set(paramName, serializedValue);
      }
      setSearchParams(newParams);
      router.replace(
        `${pathname}?${newParams.toString().replace(/%2C/g, ",")}`,
        {
          scroll: false,
        }
      );
    },
    [pathname, searchParams.keys()]
  );
  // useEffect(() => {
  //   console.log("check useEffect update ", paramName);
  // }, [pathname, searchParams.keys()]);

  return [value, updateValue];
};
