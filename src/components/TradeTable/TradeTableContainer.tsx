import { FC } from "react";
import { useTradeItemsQuery } from "../../queries/getTradeItemsQuery";
import TradeTablePresenter from "./TradeTablePresenter";

interface TradeTableContainerProps {}

const TradeTableContainer: FC<TradeTableContainerProps> = () => {
  // const { isSearched, searchForm } = useSearchFormStore();
  // const { loading, data } = useTradeItemsQuery(!isSearched, searchForm);

  return <TradeTablePresenter isLoading={false} items={[]} />;
};

export default TradeTableContainer;
