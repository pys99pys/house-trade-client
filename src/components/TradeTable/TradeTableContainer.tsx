import { FC } from "react";
import { useTradeItemsQuery } from "../../queries/getTradeItemsQuery";
import { useSearchFormStore } from "../../stores/searchFormStore";
import TradeTablePresenter from "./TradeTablePresenter";

interface TradeTableContainerProps {}

const TradeTableContainer: FC<TradeTableContainerProps> = () => {
  const { isSearched, searchForm } = useSearchFormStore();
  const { loading, data } = useTradeItemsQuery(!isSearched, searchForm);

  return (
    <TradeTablePresenter isLoading={loading} items={data?.tradeItems || []} />
  );
};

export default TradeTableContainer;
