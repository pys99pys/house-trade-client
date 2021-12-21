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

const useItemsFilter = (): ReturnType => {
  const [sort, setSort] = useState<Sort>({
    column: "tradeDate",
    direction: "desc",
  });

  const onChangeSort: OnChangeSortHandler = useCallback(
    (targetColumn) => {
      if (targetColumn === sort.column) {
        setSort({
          column: targetColumn,
          direction: sort.direction === "asc" ? "desc" : "asc",
        });

        return;
      }

      setSort({
        column: targetColumn,
        direction: "asc",
      });
    },
    [sort]
  );

  return {
    sort,
    onChangeSort,
  };
};

export default useItemsFilter;
