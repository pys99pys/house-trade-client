import { TradeItem } from "./tradeItemModels";

export interface FavoriteFilterItem {
  stateCode: string;
  cityName: string;
  stateName: string;
}

export interface ItemsSort {
  column: keyof TradeItem;
  direction: "asc" | "desc";
}

export interface ItemsFilter {
  isShowFavoriteItems: boolean;
}
