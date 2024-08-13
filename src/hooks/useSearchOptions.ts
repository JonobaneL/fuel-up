import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSearchOptions = (
  key: string
): [string | null, (value: string) => void] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams);
  const searchValue = searchParams.get(key);
  const setParam = (value: string) => {
    newParams.set(key, value);
    router.replace(`${pathname}?${newParams.toString()}`, {
      scroll: false,
    });
  };
  return [searchValue, setParam];
};
