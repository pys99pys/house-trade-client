import { useMemo } from "react";
import { TradeItem } from "../models/tradeItemModels";
import useFavoriteItems from "./useFavoriteItems";
import useItemsSort from "./useItemsSort";
import useItemsFIlter from "./useItemsFIlter";
import { getFavoriteFilteredItems, getSortedItems } from "../utils/parserUtils";

const useTradeItems = (items: TradeItem[]) => {
  const { sort, onChangeSort } = useItemsSort();
  const { favoriteItems, onSaveFavoriteItem, onRemoveFavoriteItem } =
    useFavoriteItems();
  const { itemsFilter, onChangeItemsFilter } = useItemsFIlter();

  const filteredTradeItems = useMemo(() => {
    const favoriteFilteredItems = getFavoriteFilteredItems(
      items,
      favoriteItems,
      itemsFilter.isShowFavoriteItems
    );

    const sortedItems = getSortedItems(favoriteFilteredItems, sort);

    return sortedItems;
  }, [items, favoriteItems, itemsFilter, sort]);

  return {
    filteredTradeItems,
    favoriteItems,
    sort,
    itemsFilter,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
    onChangeSort,
    onChangeItemsFilter,
  };
};

export default useTradeItems;
