import { atom } from "recoil";
import { ITradeItem } from "../hooks/useTradeItems2";

export interface IItemsSort {
  column: keyof ITradeItem;
  direction: "asc" | "desc";
}

export const getItemsSortInStorage = (): IItemsSort => {
  const defaultSort: IItemsSort = {
    column: "tradeDate",
    direction: "desc",
  };

  try {
    const savedItemsSort = window.localStorage.getItem("ITEMS_SORT");
    return savedItemsSort ? JSON.parse(savedItemsSort) : defaultSort;
  } catch {
    return defaultSort;
  }
};

export const setItemsSortToStorage = (sort: IItemsSort): IItemsSort => {
  window.localStorage.setItem("ITEMS_SORT", JSON.stringify(sort));
  return getItemsSortInStorage();
};

const itemsSortState = atom<IItemsSort>({
  key: "itemsSortState",
  default: getItemsSortInStorage(),
});

export default itemsSortState;
