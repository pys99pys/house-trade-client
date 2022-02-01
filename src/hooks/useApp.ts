import { useCallback } from "react";
import { ISearchForm } from "../models/searchFormModels";
import useData from "./useData";
import useFavoriteFilters from "./useFavoriteFilters";
import useSearchForm from "./useSearchForm";
import landCodes from "../jsons/landCodes.json";

const useApp = () => {
  const { form: searchForm, onChangeForm: onChangeSearchForm } =
    useSearchForm();
  const { isLoading, tradeItems, onFetch } = useData();
  const {
    favoriteFilters: filters,
    onSaveFavoriteFilter,
    onRemoveFavoriteFilter,
  } = useFavoriteFilters();

  const onFetchWithSearchForm = useCallback(
    (afterForm: ISearchForm) => {
      if (afterForm.tradeMonth && afterForm.stateCode) {
        onFetch(afterForm.tradeMonth, afterForm.stateCode);
      }
    },
    [onFetch]
  );

  const onFetchWithStateCode = useCallback(
    (stateCode: string) => {
      const cityName = landCodes.find((item) =>
        item.children.find((child) => child.code === stateCode)
      )?.name;

      if (searchForm.tradeMonth && cityName) {
        onFetch(searchForm.tradeMonth, stateCode);
        onChangeSearchForm({ cityName, stateCode });
      }
    },
    [searchForm, onFetch, onChangeSearchForm]
  );

  const onChangeDate = useCallback(
    (date: string) => {
      const afterForm = onChangeSearchForm({ tradeMonth: date });
      onFetchWithSearchForm(afterForm);
    },
    [onChangeSearchForm, onFetchWithSearchForm]
  );

  const onChangeCityName = useCallback(
    (cityName: string) => {
      onChangeSearchForm({ cityName, stateCode: "" });
    },
    [onChangeSearchForm]
  );

  const onChangeStateCode = useCallback(
    (stateCode: string) => {
      const afterForm = onChangeSearchForm({ stateCode });
      onFetchWithSearchForm(afterForm);
    },
    [onChangeSearchForm, onFetchWithSearchForm]
  );

  const onCreateFilter = useCallback(() => {
    const stateName = landCodes
      .find((item) => item.name === searchForm.cityName)
      ?.children.find((item) => item.code === searchForm.stateCode)?.name;

    if (!stateName) {
      return;
    }

    onSaveFavoriteFilter({
      stateCode: searchForm.stateCode,
      cityName: searchForm.cityName,
      stateName,
    } as any);
  }, [searchForm, onSaveFavoriteFilter]);

  return {
    isLoading,
    searchForm,
    tradeItems,
    filters,
    onChangeDate,
    onChangeCityName,
    onChangeStateCode,
    onCreateFilter,
    onRemoveFavoriteFilter,
    onFetchWithStateCode,
  };
};

export default useApp;
