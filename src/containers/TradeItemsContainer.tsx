import { FC } from "react";
import { TradeItem } from "../models/tradeItemModels";
import TradeItems from "../components/TradeItems";
import Summary from "../components/Summary";
import useItemsFilter from "../hooks/useItemsFilter";

interface TradeItemsContainerProps {
  isLoading: boolean;
  items: TradeItem[];
}

const TradeItemsContainer: FC<TradeItemsContainerProps> = ({
  isLoading,
  items,
}) => {
  const {} = useItemsFilter(items);

  return (
    <>
      <Summary count={items.length} />
      <div className="mt-2">
        <TradeItems isLoading={isLoading} items={items} />
      </div>
    </>
  );
};

export default TradeItemsContainer;
