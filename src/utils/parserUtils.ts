import { ItemsSort } from "../models/filterModels";
import { TradeItem } from "../models/tradeItemModels";
import { calendarFormat, sizeFormat } from "./formatUtils";

export const parseToTradeItem = (row: any, stateCode: string): TradeItem => {
  const apartName = row["아파트"].trim();
  const address = row["법정동"].trim();

  return {
    favoriteKey: `${stateCode}|${address}${apartName}`,
    address,
    apartName,
    tradeAmount: Number(row["거래금액"].replace(/[^0-9]/gi, "")) * 10000,
    tradeDate: `${row["년"]}-${calendarFormat(row["월"])}-${calendarFormat(
      row["일"]
    )}`,
    sizeArea: row["전용면적"],
    sizeFlat: sizeFormat(row["전용면적"]),
    buildedYear: row["건축년도"],
    floor: row["층"],
  };
};

export const getFavoriteFilteredItems = (
  items: TradeItem[],
  favoriteItemKeys: string[],
  isShowFavoriteItems: boolean
): TradeItem[] => {
  if (!isShowFavoriteItems) {
    return items;
  }

  return items.filter((item) => !!favoriteItemKeys.includes(item.favoriteKey));
};

export const getSortedItems = (
  items: TradeItem[],
  sort: ItemsSort
): TradeItem[] => {
  return items.sort((a, b) => {
    const from = a[sort.column];
    const to = b[sort.column];

    if (sort.direction === "asc") {
      return from > to ? 1 : -1;
    }

    if (sort.direction === "desc") {
      return from > to ? -1 : 1;
    }

    return 0;
  });
};
