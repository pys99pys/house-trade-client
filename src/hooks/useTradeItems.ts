import { useMemo } from "react";
import { TradeItem } from "../models/tradeItemModels";
import useFavoriteItems from "./useFavoriteItems";
import useItemsSort from "./useItemsSort";

const useTradeItems = (items: TradeItem[], stateCode: string) => {
  const { sort, onChangeSort } = useItemsSort();
  const { favoriteItems, onSaveFavoriteItem, onRemoveFavoriteItem } =
    useFavoriteItems();

  const filteredFavoriteItems = useMemo(
    () => favoriteItems.filter((item) => item.stateCode === stateCode),
    [favoriteItems, stateCode]
  );

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
    filteredFavoriteItems,
    sort,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
    onChangeSort,
  };
};

export default useTradeItems;
