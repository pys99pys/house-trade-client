import { useCallback, useState } from "react";
import { ItemsFilter } from "../models/filterModels";

type OnChangeItemsFilterHandler = (itemsFilter: Partial<ItemsFilter>) => void;

interface ReturnType {
  itemsFilter: ItemsFilter;
  onChangeItemsFilter: OnChangeItemsFilterHandler;
}

const useItemsFilter = (): ReturnType => {
  const [itemsFilter, setItemsFilter] = useState<ItemsFilter>({
    isShowFavoriteItems: false,
  });

  const onChangeItemsFilter: OnChangeItemsFilterHandler = useCallback(
    (afterItemsFilter) =>
      setItemsFilter({ ...itemsFilter, ...afterItemsFilter }),
    [itemsFilter]
  );

  return {
    itemsFilter,
    onChangeItemsFilter,
  };
};

export default useItemsFilter;
