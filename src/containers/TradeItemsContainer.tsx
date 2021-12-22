import { FC } from "react";
import { TradeItem } from "../models/tradeItemModels";
import useTradeItems from "../hooks/useTradeItems";
import Summary from "../components/Summary";
import TradeItemsLayout from "../layouts/TradeItemsLayout";
import TradeItemsFilter from "../components/TradeItemsFilter";
import TradeItems from "../components/TradeItems";

interface TradeItemsContainerProps {
  isLoading: boolean;
  items: TradeItem[];
  stateCode: string;
}

const TradeItemsContainer: FC<TradeItemsContainerProps> = ({
  isLoading,
  items,
  stateCode,
}) => {
  const {
    filteredTradeItems,
    favoriteItems,
    sort,
    itemsFilter,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
    onChangeSort,
    onChangeItemsFilter,
  } = useTradeItems(items);

  return (
    <TradeItemsLayout
      summary={<Summary count={items.length} />}
      tradeItemsFilter={
        <TradeItemsFilter
          itemsFilter={itemsFilter}
          onChangeItemsFilter={onChangeItemsFilter}
        />
      }
      tradeItems={
        <TradeItems
          isLoading={isLoading}
          tradeItems={filteredTradeItems}
          favoriteItems={favoriteItems}
          sort={sort}
          onSaveFavoriteItem={onSaveFavoriteItem}
          onRemoveFavoriteItem={onRemoveFavoriteItem}
          onChangeSort={onChangeSort}
        />
      }
    />
  );
};

export default TradeItemsContainer;
