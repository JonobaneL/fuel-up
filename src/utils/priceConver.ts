export const priceConvert = (price: number[]) => {
  return [Math.min(...price), Math.max(...price)];
};
