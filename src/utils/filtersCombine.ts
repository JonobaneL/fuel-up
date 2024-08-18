import { DynamicParams, ParamProps } from "@/models/paramsTypes";
import { UseQueryResult } from "@tanstack/react-query";

export const filtersCombiteCallback = (
  response: UseQueryResult<any, Error>[],
  params: DynamicParams
) => ({
  data: response
    .map((response) => {
      const paramRes = response.data as ParamProps[];
      if (!paramRes) return [];
      return paramRes.map((item) => {
        const paramName = Object.keys(params).find((key) =>
          params[key].includes(item.slug)
        );
        return { ...item, paramName };
      });
    })
    .flat(),
  pending: response.some((response) => response.isPending),
});
