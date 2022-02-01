import { FC, useCallback } from "react";
import { getFavoriteItemKey } from "../utils/helpers";
import useTradeItems, { ITradeItem } from "../hooks/useTradeItems2";
import useSearchFormStore from "../hooks/useSearchFormStore";
import useItemsSortStore from "../hooks/useItemsSortStore";
import useFavoriteItemsStore from "../hooks/useFavoriteItemsStore";
import useItemsFilterStore from "../hooks/useItemsFilterStore";
import TradeItemsTableHead from "./TradeItemsTableHead";
import TradeItemsSummary from "./TradeItemsSummary";
import TradeItemsFilter from "./TradeItemsFilter";
import TradeItemsTableBody from "./TradeItemsTableBody";

const TradeItemsTable: FC = () => {
  const { loading, tradeItems, tradeAmountAverage } = useTradeItems();
  const { searchForm } = useSearchFormStore();
  const { itemsSort, onChangeItemsSort } = useItemsSortStore();
  const { itemsFilterState, onChangeItemsFilter } = useItemsFilterStore();
  const { favoriteItemKeys, onSaveFavoriteItemKey, onRemoveFavoriteItemKey } =
    useFavoriteItemsStore();

  const handleSaveFavoriteItem = useCallback(
    (tradeItem: ITradeItem) => {
      onSaveFavoriteItemKey(
        getFavoriteItemKey(searchForm.stateCode, tradeItem)
      );
    },
    [onSaveFavoriteItemKey, searchForm.stateCode]
  );

  const handleRemoveFavoriteItem = useCallback(
    (tradeItem: ITradeItem) => {
      onRemoveFavoriteItemKey(
        getFavoriteItemKey(searchForm.stateCode, tradeItem)
      );
    },
    [onRemoveFavoriteItemKey, searchForm.stateCode]
  );

  return (
    <div>
      <div className="flex justify-between">
        <TradeItemsSummary
          tradeItemsCount={tradeItems.length}
          tradeAmountAverage={tradeAmountAverage}
        />
        <TradeItemsFilter
          filters={itemsFilterState}
          onChangeFilter={onChangeItemsFilter}
        />
      </div>
      <table className="w-full mt-2">
        <thead>
          <TradeItemsTableHead
            itemsSort={itemsSort}
            onChangeItemsSort={onChangeItemsSort}
          />
        </thead>
        <tbody>
          <TradeItemsTableBody
            loading={loading}
            tradeItems={tradeItems}
            searchForm={searchForm}
            favoriteItemKeys={favoriteItemKeys}
            onSaveFavoriteItem={handleSaveFavoriteItem}
            onRemoveFavoriteItem={handleRemoveFavoriteItem}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TradeItemsTable;
