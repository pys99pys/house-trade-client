import { FavoriteItem } from "../models/favoriteItemsModel";
import { ItemsSort } from "../models/filterModels";
import { TradeItem } from "../models/tradeItemModels";
import { calendarFormat, sizeFormat } from "./formatUtils";

export const parseToTradeItem = (row: any): TradeItem => {
  return {
    apartName: row["아파트"].trim(),
    tradeAmount: Number(row["거래금액"].replace(/[^0-9]/gi, "")) * 10000,
    tradeDate: `${row["년"]}-${calendarFormat(row["월"])}-${calendarFormat(
      row["일"]
    )}`,
    sizeArea: row["전용면적"],
    sizeFlat: sizeFormat(row["전용면적"]),
    buildedYear: row["건축년도"],
    address: row["법정동"].trim(),
    floor: row["층"],
  };
};

export const getFavoriteFilteredItems = (
  items: TradeItem[],
  favoriteItems: FavoriteItem[],
  isShowFavoriteItems: boolean
): TradeItem[] => {
  if (!isShowFavoriteItems) {
    return items;
  }

  return items.filter(
    (item) =>
      !!favoriteItems.find(
        (favoriteItem) =>
          favoriteItem.address === item.address &&
          favoriteItem.apartName === item.apartName
      )
  );
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
