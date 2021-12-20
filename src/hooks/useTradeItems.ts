import { useMemo } from "react";
import { TradeItem } from "../models/tradeItemModels";
import useItemsSort from "./useItemsSort";

const useTradeItems = (items: TradeItem[]) => {
  const { sort, onChangeSort } = useItemsSort();

  const sortedItems = useMemo(() => {
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
  }, [items, sort]);

  return {
    sortedItems,
    sort,
    onChangeSort,
  };
};

export default useTradeItems;
