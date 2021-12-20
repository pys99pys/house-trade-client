import { FC } from "react";
import { TradeItem } from "../models/tradeItemModels";
import TradeItems from "../components/TradeItems";
import Summary from "../components/Summary";
import useTradeItems from "../hooks/useTradeItems";

interface TradeItemsContainerProps {
  isLoading: boolean;
  items: TradeItem[];
}

const TradeItemsContainer: FC<TradeItemsContainerProps> = ({
  isLoading,
  items,
}) => {
  const { sortedItems, sort, onChangeSort } = useTradeItems(items);

  return (
    <>
      <Summary count={items.length} />
      <div className="mt-2">
        <TradeItems
          isLoading={isLoading}
          items={sortedItems}
          sort={sort}
          onChangeSort={onChangeSort}
        />
      </div>
    </>
  );
};

export default TradeItemsContainer;
