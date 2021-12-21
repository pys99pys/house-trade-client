import { useCallback, useState } from "react";
import { TradeItem } from "../models/tradeItemModels";

export interface Sort {
  column: keyof TradeItem;
  direction: "asc" | "desc";
}

export type OnChangeSortHandler = (targetColumn: keyof TradeItem) => void;

interface ReturnType {
  sort: Sort;
  onChangeSort: OnChangeSortHandler;
}

const getSortInStorage = (): Sort => {
  const defaultSort: Sort = {
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

const setSortToStorage = (sort: Sort): Sort => {
  window.localStorage.setItem("sort", JSON.stringify(sort));
  return getSortInStorage();
};

const useItemsFilter = (): ReturnType => {
  const [sort, setSort] = useState<Sort>(getSortInStorage());

  const onChangeSort: OnChangeSortHandler = useCallback(
    (targetColumn) => {
      let afterSort: Sort;

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
