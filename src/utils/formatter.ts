export const numberFormat = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getFlatSize = (areaSize: number): number => {
  const area = areaSize * 0.3025;
  const addtionalSize = areaSize < 84 ? 8 : 9;

  return Math.floor(area + addtionalSize);
};

export const getTradeAmount = (originAmount: number): number => {
  return Math.round((originAmount / 100000000) * 10) / 10;
};

export const getAverageAmount = (
  tradeAmount: number,
  flatSize: number
): number => {
  return Math.floor(tradeAmount / flatSize / 10000);
};
