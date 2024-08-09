export const serialize = (key: string, value: string[] | number[]) => {
  if (key == "price") {
    return value[0].toString().slice(0, -4);
  }
  return value.join(",");
};
export const deserialize = (key: string, value: string | null) => {
  if (value == null) return [];
  if (key == "price") return [`${value}грн.`];
  return value.split(",");
};
