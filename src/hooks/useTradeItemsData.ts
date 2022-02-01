import { useState, useCallback } from "react";
import { useQuery, gql } from "@apollo/client";
import { ISearchForm } from "../models/searchFormModels";
import { ITradeItem } from "../models/tradeItemModels";
import { getCityNameWithStateCode } from "../utils/helpers";

type OnChangeTradeMonthHandler = (tradeMonth: string) => void;

type OnChangeCityNameHandler = (cityName: string) => void;

type OnChangeStateCodeHandler = (stateCode: string) => void;

interface ReturnType {
  isLoading: boolean;
  tradeItems: ITradeItem[];
  searchForm: ISearchForm;
  onChangeTradeMonth: OnChangeTradeMonthHandler;
  onChangeCityName: OnChangeCityNameHandler;
  onChangeStateCode: OnChangeStateCodeHandler;
}

const GET_TRADE_ITEMS = gql`
  query GetTradeItems($tradeMonth: Float!, $stateCode: Float!) {
    tradeItems(tradeMonth: $tradeMonth, stateCode: $stateCode) {
      address
      apartName
      areaSize
      buildedYear
      flastSize
      floor
      tradeAmount
      tradeDate
    }
  }
`;

const useTradeItemsData = (): ReturnType => {
  const [searchForm, setSearchForm] = useState<ISearchForm>({
    tradeMonth: new Date().toISOString().substring(0, 7),
    cityName: "",
    stateCode: "",
  });

  const { loading, data } = useQuery<{ tradeItems: ITradeItem[] }>(
    GET_TRADE_ITEMS,
    {
      variables: {
        tradeMonth: Number(searchForm.tradeMonth.replace(/-/g, "")),
        stateCode: Number(searchForm.stateCode),
      },
    }
  );

  const onChangeTradeMonth: OnChangeTradeMonthHandler = useCallback(
    (tradeMonth) => {
      setSearchForm({
        ...searchForm,
        tradeMonth,
      });
    },
    [searchForm]
  );

  const onChangeCityName: OnChangeCityNameHandler = useCallback(
    (cityName) => {
      setSearchForm({
        ...searchForm,
        cityName,
        stateCode: "",
      });
    },
    [searchForm]
  );

  const onChangeStateCode: OnChangeStateCodeHandler = useCallback(
    (stateCode) => {
      const cityName = getCityNameWithStateCode(stateCode);

      if (cityName) {
        setSearchForm({
          ...searchForm,
          cityName,
          stateCode,
        });
      }
    },
    [searchForm]
  );

  return {
    isLoading: loading,
    tradeItems: data?.tradeItems || [],
    searchForm,
    onChangeTradeMonth,
    onChangeCityName,
    onChangeStateCode,
  };
};

export default useTradeItemsData;
