import { useCallback } from "react";
import { useRecoilState } from "recoil";
import searchFormStore, { ISearchForm } from "../stores/searchFormStore";

type OnChangeTradeMonthHandler = (tradeMonth: string) => void;

type OnChangeCityNameHandler = (cityName: string) => void;

type OnChangeStateCodeHandler = (stateCode: string) => void;

interface Return {
  searchForm: ISearchForm;
  onChangeTradeMonth: OnChangeTradeMonthHandler;
  onChangeCityName: OnChangeCityNameHandler;
  onChangeStateCode: OnChangeStateCodeHandler;
}

const useSearchFormStore = (): Return => {
  const [searchForm, setSearchForm] = useRecoilState(searchFormStore);

  const onChangeTradeMonth: OnChangeTradeMonthHandler = useCallback(
    (tradeMonth) =>
      setSearchForm({
        ...searchForm,
        tradeMonth,
      }),
    [searchForm, setSearchForm]
  );

  const onChangeCityName: OnChangeCityNameHandler = useCallback(
    (cityName) =>
      setSearchForm({
        ...searchForm,
        cityName,
        stateCode: "",
      }),
    [searchForm, setSearchForm]
  );

  const onChangeStateCode: OnChangeStateCodeHandler = useCallback(
    (stateCode) =>
      setSearchForm({
        ...searchForm,
        stateCode,
      }),
    [searchForm, setSearchForm]
  );

  return {
    searchForm,
    onChangeTradeMonth,
    onChangeCityName,
    onChangeStateCode,
  };
};

export default useSearchFormStore;
