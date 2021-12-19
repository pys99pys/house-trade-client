import { useCallback, useState } from "react";
import { SearchForm } from "../models/searchFormModels";

type OnChangeSearchFormHandler = (afterForm: Partial<SearchForm>) => SearchForm;

interface ReturnType {
  searchForm: SearchForm;
  onChangeSearchForm: OnChangeSearchFormHandler;
}

const useSearchForm = (): ReturnType => {
  const [searchForm, setSearchForm] = useState<SearchForm>({
    date: new Date().toISOString().substring(0, 7),
    cityName: "",
    stateCode: "",
  });

  const onChangeSearchForm: OnChangeSearchFormHandler = useCallback(
    (afterForm): SearchForm => {
      const mergedForm = {
        ...searchForm,
        ...afterForm,
      };

      setSearchForm(mergedForm);
      return mergedForm;
    },
    [searchForm]
  );

  return {
    searchForm,
    onChangeSearchForm,
  };
};

export default useSearchForm;
