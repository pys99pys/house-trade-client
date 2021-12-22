import { useMemo } from "react";
import { TradeItem } from "../models/tradeItemModels";
import useFavoriteItems from "./useFavoriteItems";
import useItemsSort from "./useItemsSort";
import useItemsFIlter from "./useItemsFIlter";
import { getFavoriteFilteredItems, getSortedItems } from "../utils/parserUtils";

const useTradeItems = (items: TradeItem[], stateCode: string) => {
  const { sort, onChangeSort } = useItemsSort();
  const { favoriteItems, onSaveFavoriteItem, onRemoveFavoriteItem } =
    useFavoriteItems();
  const { itemsFilter, onChangeItemsFilter } = useItemsFIlter();

  const filteredFavoriteItems = useMemo(
    () => favoriteItems.filter((item) => item.stateCode === stateCode),
    [favoriteItems, stateCode]
  );

  const filteredTradeItems = useMemo(() => {
    const favoriteFilteredItems = getFavoriteFilteredItems(
      items,
      filteredFavoriteItems,
      itemsFilter.isShowFavoriteItems
    );

    const sortedItems = getSortedItems(favoriteFilteredItems, sort);

    return sortedItems;
  }, [items, filteredFavoriteItems, itemsFilter, sort]);

  return {
    filteredTradeItems,
    filteredFavoriteItems,
    sort,
    itemsFilter,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
    onChangeSort,
    onChangeItemsFilter,
  };
};

export default useTradeItems;
