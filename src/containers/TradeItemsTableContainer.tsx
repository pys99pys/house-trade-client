import { FC, useCallback } from "react";
import { getFavoriteItemKey } from "../utils/helpers";
import useTradeItems, { ITradeItem } from "../hooks/useTradeItems";
import useSearchFormStore from "../hooks/useSearchFormStore";
import useItemsSortStore from "../hooks/useItemsSortStore";
import useFavoriteItemsStore from "../hooks/useFavoriteItemsStore";
import useItemsFilterStore from "../hooks/useItemsFilterStore";
import TradeItemsTableHeader from "../components/TradeItemsTableHeader";
import TradeItemsTable from "../components/TradeItemsTable";

interface TradeItemsTableContainerProps {}

const TradeItemsTableContainer: FC<TradeItemsTableContainerProps> = () => {
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
    <>
      <TradeItemsTableHeader
        tradeItemsCount={tradeItems.length}
        tradeAmountAverage={tradeAmountAverage}
        itemsFilters={itemsFilterState}
        onChangeItemsFilter={onChangeItemsFilter}
      />
      <div className="mt-3">
        <TradeItemsTable
          loading={loading}
          tradeItems={tradeItems}
          searchForm={searchForm}
          itemsSort={itemsSort}
          favoriteItemKeys={favoriteItemKeys}
          onChangeItemsSort={onChangeItemsSort}
          onSaveFavoriteItemKey={handleSaveFavoriteItem}
          onRemoveFavoriteItemKey={handleRemoveFavoriteItem}
        />
      </div>
    </>
  );
};

export default TradeItemsTableContainer;
