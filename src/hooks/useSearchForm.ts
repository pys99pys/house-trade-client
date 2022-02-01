import { useCallback, useState } from "react";
import { ISearchForm } from "../models/searchFormModels";

type OnChangeSearchFormHandler = (
  afterForm: Partial<ISearchForm>
) => ISearchForm;

type OnChangeTradeMonthHandler = (tradeMonth: string) => ISearchForm;

type OnChangeCityNameHandler = (cityName: string) => ISearchForm;

type OnChangeStateCodeHandler = (stateCode: string) => ISearchForm;

interface ReturnType {
  form: ISearchForm;
  onChangeForm: OnChangeSearchFormHandler;
  onChangeTradeMonth: OnChangeTradeMonthHandler;
  onChangeCityName: OnChangeCityNameHandler;
  onChangeStateCode: OnChangeStateCodeHandler;
}

const useSearchForm = (): ReturnType => {
  const [form, setForm] = useState<ISearchForm>({
    tradeMonth: new Date().toISOString().substring(0, 7),
    cityName: "",
    stateCode: "",
  });

  const onChangeForm: OnChangeSearchFormHandler = useCallback(
    (afterForm): ISearchForm => {
      const mergedForm = {
        ...form,
        ...afterForm,
      };

      setForm(mergedForm);
      return mergedForm;
    },
    [form]
  );

  const onChangeTradeMonth: OnChangeTradeMonthHandler = useCallback(
    (tradeMonth) => onChangeForm({ tradeMonth }),
    [onChangeForm]
  );

  const onChangeCityName: OnChangeCityNameHandler = useCallback(
    (cityName) => onChangeForm({ cityName }),
    [onChangeForm]
  );

  const onChangeStateCode: OnChangeStateCodeHandler = useCallback(
    (stateCode) => onChangeForm({ stateCode }),
    [onChangeForm]
  );

  return {
    form,
    onChangeForm,
    onChangeTradeMonth,
    onChangeCityName,
    onChangeStateCode,
  };
};

export default useSearchForm;
