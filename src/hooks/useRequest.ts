import { useEffect, useState } from "react";

export const useRequest = (value: string) => {
  const [request, setRequest] = useState("");

  useEffect(() => {
    const time = setTimeout(() => setRequest(value), 600);
    return () => clearTimeout(time);
  }, [value]);

  return request;
};
