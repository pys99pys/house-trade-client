import { ITradeItem } from "./tradeItemModels";

export interface ItemsSort {
  column: keyof ITradeItem;
  direction: "asc" | "desc";
}
