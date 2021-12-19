import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { getTradeItems } from "../apis/tradeItemApis";
import { TradeItem } from "../models/tradeItemModels";

type onFetchHandler = (date: string, stateCode: string) => void;

interface ReturnType {
  isLoading: boolean;
  tradeItems: TradeItem[];
  onFetch: onFetchHandler;
}

const useData = (): ReturnType => {
  const [queryParams, setQueryParams] = useState<{
    date: string;
    stateCode: string;
  } | null>(null);

  const { isLoading, data } = useQuery(
    ["tradneItems", queryParams?.date, queryParams?.stateCode],
    () => getTradeItems(queryParams?.date || "", queryParams?.stateCode || ""),
    {
      enabled: !!queryParams,
      refetchOnWindowFocus: false,
    }
  );

  const onFetch: onFetchHandler = useCallback(
    (date, stateCode) =>
      setQueryParams({
        date,
        stateCode,
      }),
    []
  );

  return {
    isLoading,
    tradeItems: data || [],
    onFetch,
  };
};

export default useData;
