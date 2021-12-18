import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { getTradeItems } from "../apis/tradeItemApis";
import { TradeItem } from "../models/tradeItemModels";

type OnSubmitHandler = (date: string, stateCode: string) => void;

interface ReturnType {
  isLoading: boolean;
  tradeItems: TradeItem[];
  onSubmit: OnSubmitHandler;
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

  const onSubmit: OnSubmitHandler = useCallback(
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
    onSubmit,
  };
};

export default useData;
