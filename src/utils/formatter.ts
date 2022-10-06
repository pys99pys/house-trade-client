import { TradeItem } from '../models/TradeItem';

export const numberFormat = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getFlatSize = (areaSize: number): number => {
  const area = areaSize * 0.3025;
  const addtionalSize = areaSize < 84 ? 8 : 9;

  return Math.floor(area + addtionalSize);
};

export const getAreaSize = (originSize: number): number => {
  return Math.round(originSize * 100) / 100;
};

export const getTradeAmount = (originAmount: number): number => {
  return Math.round((originAmount / 100000000) * 10) / 10;
};

export const getAverageAmount = (tradeAmount: number, areaSize: number): number => {
  return Math.floor(tradeAmount / getFlatSize(areaSize) / 10000);
};

export const getAllAverageAmount = (items: TradeItem[]): number => {
  const averageAmountSummary = items.reduce((sum, item) => sum + item.tradeAmount / getFlatSize(item.areaSize), 0);

  return Math.floor(averageAmountSummary / items.length / 10000);
};
