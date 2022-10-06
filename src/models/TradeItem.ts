export interface TradeItem {
  address: string;
  apartName: string;
  areaSize: number;
  buildedYear: number;
  floor: number;
  tradeAmount: number;
  tradeDate: string;
}

export type Sort = [keyof TradeItem, 'asc' | 'desc'];
