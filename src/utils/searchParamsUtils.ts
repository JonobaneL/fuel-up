export const serialize = (value: string[]) => {
  return value.join(",");
};
export const deserialize = (value: string | null) => {
  if (value == null) return [];
  return value.split(",");
};
