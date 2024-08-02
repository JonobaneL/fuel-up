import { useLayoutEffect, useRef } from "react";

export const useLatest = (value: unknown) => {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
};
