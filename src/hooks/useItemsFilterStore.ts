import { useCallback } from "react";
import { useRecoilState } from "recoil";
import itemsFilterStore, { IItemsFilter } from "../stores/itemsFilterStore";

type OnChangeItemsFilterHandler = (
  targetFilters: Partial<IItemsFilter>
) => void;

interface Return {
  itemsFilterState: IItemsFilter;
  onChangeItemsFilter: OnChangeItemsFilterHandler;
}

const useItemsFilterStore = (): Return => {
  const [itemsFilterState, setItemsFilterState] =
    useRecoilState(itemsFilterStore);

  const onChangeItemsFilter: OnChangeItemsFilterHandler = useCallback(
    (targetFilters) => {
      setItemsFilterState({
        ...itemsFilterState,
        ...targetFilters,
      });
    },
    [itemsFilterState, setItemsFilterState]
  );

  return {
    itemsFilterState,
    onChangeItemsFilter,
  };
};

export default useItemsFilterStore;
