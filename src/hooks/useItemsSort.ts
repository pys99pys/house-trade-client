import { useCallback, useState } from "react";
import { ItemsSort } from "../models/filterModels";
import { TradeItem } from "../models/tradeItemModels";

type OnChangeSortHandler = (targetColumn: keyof TradeItem) => void;

interface ReturnType {
  sort: ItemsSort;
  onChangeSort: OnChangeSortHandler;
}

const getSortInStorage = (): ItemsSort => {
  const defaultSort: ItemsSort = {
    column: "tradeDate",
    direction: "desc",
  };

  try {
    const savedSort = window.localStorage.getItem("sort");
    return savedSort ? JSON.parse(savedSort) : defaultSort;
  } catch {
    return defaultSort;
  }
};

const setSortToStorage = (sort: ItemsSort): ItemsSort => {
  window.localStorage.setItem("sort", JSON.stringify(sort));
  return getSortInStorage();
};

const useItemsFilter = (): ReturnType => {
  const [sort, setSort] = useState<ItemsSort>(getSortInStorage());

  const onChangeSort: OnChangeSortHandler = useCallback(
    (targetColumn) => {
      let afterSort: ItemsSort;

      if (targetColumn === sort.column) {
        afterSort = {
          column: targetColumn,
          direction: sort.direction === "asc" ? "desc" : "asc",
        };
      } else {
        afterSort = {
          column: targetColumn,
          direction: "asc",
        };
      }

      const savedSort = setSortToStorage(afterSort);
      setSort(savedSort);
    },
    [sort]
  );

  return {
    sort,
    onChangeSort,
  };
};

export default useItemsFilter;
