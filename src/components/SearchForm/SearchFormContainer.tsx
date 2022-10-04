import { FC, useMemo } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { SearchForm } from "../../models/SearchForm";
import { LandCodeChildren } from "../../models/LandCode";
import {
  searchFiltersState,
  searchFormState,
  searchTargetState,
} from "../../stores/mainPageStore";
import landCodes from "../../jsons/landCodes.json";
import SearchFormPresenter from "./SearchFormPresenter";
import { setStorageData } from "../../utils/searchFilter";

interface SearchFormContainerProps {}

const getLandCodeItems = (cityName: string): LandCodeChildren[] =>
  landCodes.find((item) => item.name === cityName)?.children || [];

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);
  const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersState);
  const setSearchTarget = useSetRecoilState(searchTargetState);

  const landCodeItems = useMemo(
    () => getLandCodeItems(searchForm.cityName),
    [searchForm.cityName]
  );

  const isSavedSearchFilter = useMemo(
    () => searchFilters.some((filter) => filter === searchForm.code),
    [searchForm.code, searchFilters]
  );

  const handleChange = (
    key: keyof SearchForm,
    value: SearchForm[keyof SearchForm]
  ) => {
    const afterForm = {
      ...searchForm,
      [key]: value,
    };

    if (key === "cityName") {
      const landCodeItems = getLandCodeItems(afterForm.cityName);
      afterForm.code = landCodeItems[0].code || "";
    }

    setSearchForm(afterForm);
  };

  const handleSearch = () => {
    setSearchTarget({
      tradeMonth: Number(searchForm.year + searchForm.month.padStart(2, "0")),
      stateCode: Number(searchForm.code),
    });
  };

  const handleSave = () => {
    const afterFilters = setStorageData(searchForm.code);
    setSearchFilters(afterFilters);
  };

  return (
    <SearchFormPresenter
      form={searchForm}
      isSavedSearchFilter={isSavedSearchFilter}
      landCodeItems={landCodeItems}
      onChange={handleChange}
      onSearch={handleSearch}
      onSave={handleSave}
    />
  );
};

export default SearchFormContainer;
