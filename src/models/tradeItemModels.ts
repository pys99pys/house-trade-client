export interface TradeItem {
  favoriteKey: string;
  apartName: string;
  tradeAmount: number;
  tradeDate: string;
  sizeArea: number;
  sizeFlat: number;
  buildedYear: number;
  address: string;
  floor: number;
}

export interface ITradeItem {
  address: string;
  apartName: string;
  areaSize: number;
  buildedYear: number;
  flastSize: number;
  floor: number;
  tradeAmount: number;
  tradeDate: string;
}
