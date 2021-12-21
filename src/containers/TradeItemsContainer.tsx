import { FC } from "react";
import { TradeItem } from "../models/tradeItemModels";
import TradeItems from "../components/TradeItems";
import Summary from "../components/Summary";
import useTradeItems from "../hooks/useTradeItems";

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
    sortedItems,
    filteredFavoriteItems,
    sort,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
    onChangeSort,
  } = useTradeItems(items, stateCode);

  return (
    <>
      <Summary count={items.length} />
      <div className="mt-2">
        <TradeItems
          isLoading={isLoading}
          tradeItems={sortedItems}
          favoriteItems={filteredFavoriteItems}
          sort={sort}
          stateCode={stateCode}
          onSaveFavoriteItem={onSaveFavoriteItem}
          onRemoveFavoriteItem={onRemoveFavoriteItem}
          onChangeSort={onChangeSort}
        />
      </div>
    </>
  );
};

export default TradeItemsContainer;
