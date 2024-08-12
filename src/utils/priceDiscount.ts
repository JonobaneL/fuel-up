export const priceDiscount = (price: number, percent: number) => {
  const discoutn = (percent / 100) * price;
  return Math.floor(price - discoutn);
};
