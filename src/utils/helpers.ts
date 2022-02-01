import { ITradeItem } from "../hooks/useTradeItems";
import landCodes from "../jsons/landCodes.json";

export const getFavoriteItemKey = (
  stateCode: string,
  tradeItem: ITradeItem
): string => {
  return `${stateCode}|${tradeItem.address}|${tradeItem.apartName}`;
};

export const isFavoriteTradeItem = (
  favoriteItemKeys: string[],
  stateCode: string,
  tradeItem: ITradeItem
): boolean => {
  return favoriteItemKeys.includes(getFavoriteItemKey(stateCode, tradeItem));
};

export const getCityNameWithStateCode = (
  stateCode: string
): string | undefined => {
  return landCodes.find((item) =>
    item.children.find((child) => child.code === stateCode)
  )?.name;
};

export const getStateNameWithStateCode = (
  stateCode: string
): string | undefined => {
  const stateItems = landCodes.reduce(
    (acc, item) => acc.concat(item.children),
    [] as {
      code: string;
      name: string;
    }[]
  );

  return stateItems.find((item) => item.code === stateCode)?.name;
};
