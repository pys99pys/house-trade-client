import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { ITradeItem } from "../hooks/useTradeItems2";
import itemsSortStore, {
  IItemsSort,
  setItemsSortToStorage,
} from "../stores/itemsSortStore";

type OnChangeItemsSortHandler = (column: keyof ITradeItem) => void;

interface Return {
  itemsSort: IItemsSort;
  onChangeItemsSort: OnChangeItemsSortHandler;
}

const useItemsSortStore = (): Return => {
  const [itemsSort, setItemsSort] = useRecoilState(itemsSortStore);

  const onChangeItemsSort: OnChangeItemsSortHandler = useCallback(
    (column) => {
      let afterItemsSort: IItemsSort;

      if (column === itemsSort.column) {
        afterItemsSort = {
          column: column,
          direction: itemsSort.direction === "asc" ? "desc" : "asc",
        };
      } else {
        afterItemsSort = {
          column: column,
          direction: "asc",
        };
      }

      const savedItemsSort = setItemsSortToStorage(afterItemsSort);
      setItemsSort(savedItemsSort);
    },
    [itemsSort, setItemsSort]
  );

  return {
    itemsSort,
    onChangeItemsSort,
  };
};

export default useItemsSortStore;
