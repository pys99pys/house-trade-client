import { FC } from "react";
import { ITradeItem } from "../hooks/useTradeItems";
import TradeItemsTableHead from "./TradeItemsTableHead";
import TradeItemsTableBody from "./TradeItemsTableBody";
import { ISearchForm } from "../stores/searchFormStore";
import { IItemsSort } from "../stores/itemsSortStore";

interface TradeItemsTableProps {
  loading: boolean;
  tradeItems: ITradeItem[];
  searchForm: ISearchForm;
  itemsSort: IItemsSort;
  favoriteItemKeys: string[];
  onChangeItemsSort: (column: keyof ITradeItem) => void;
  onSaveFavoriteItemKey: (tradeItem: ITradeItem) => void;
  onRemoveFavoriteItemKey: (tradeItem: ITradeItem) => void;
}

const TradeItemsTable: FC<TradeItemsTableProps> = ({
  loading,
  tradeItems,
  searchForm,
  itemsSort,
  favoriteItemKeys,
  onChangeItemsSort,
  onSaveFavoriteItemKey,
  onRemoveFavoriteItemKey,
}) => {
  return (
    <table className="w-full">
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
          onSaveFavoriteItem={onSaveFavoriteItemKey}
          onRemoveFavoriteItem={onRemoveFavoriteItemKey}
        />
      </tbody>
    </table>
  );
};

export default TradeItemsTable;
