import { useCallback } from "react";
import { SearchForm } from "../models/searchFormModels";
import useData from "./useData";
import useFavoriteFilter from "./useFavoriteFilter";
import useSearchForm from "./useSearchForm";
import landCodes from "../jsons/landCodes.json";

const useApp = () => {
  const { searchForm, onChangeSearchForm } = useSearchForm();
  const { isLoading, tradeItems, onFetch } = useData();
  const { filters, onSaveFavoriteFilter, onRemoveFavoriteFilter } =
    useFavoriteFilter();

  const onFetchWithSearchForm = useCallback(
    (afterForm: SearchForm) => {
      if (afterForm.date && afterForm.stateCode) {
        onFetch(afterForm.date, afterForm.stateCode);
      }
    },
    [onFetch]
  );

  const onFetchWithStateCode = useCallback(
    (stateCode: string) => {
      if (searchForm.date) {
        onFetch(searchForm.date, stateCode);
      }
    },
    [searchForm, onFetch]
  );

  const onChangeDate = useCallback(
    (date: string) => {
      const afterForm = onChangeSearchForm({ date });
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
    });
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
