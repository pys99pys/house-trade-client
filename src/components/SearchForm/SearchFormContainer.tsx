import { FC, useMemo } from "react";
import { SearchForm as SearchFormType } from "../../models/SearchForm";
import { LandCodeChildren } from "../../models/LandCode";
import { useSearchFormStore } from "../../stores/searchFormStore";
import { useSearchFilterStore } from "../../stores/searchFilterStore";
import landCodes from "../../jsons/landCodes.json";
import SearchFormPresenter from "./SearchFormPresenter";

interface SearchFormContainerProps {}

const getLandCodeItems = (cityName: string): LandCodeChildren[] =>
  landCodes.find((item) => item.name === cityName)?.children || [];

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const { searchForm, setIsSearched, setSearchForm } = useSearchFormStore();
  const { searchFilters, onAddFilter } = useSearchFilterStore();

  const landCodeItems = useMemo(
    () => getLandCodeItems(searchForm.cityName),
    [searchForm.cityName]
  );

  const isSavedSearchFilter = useMemo(
    () => searchFilters.some((filter) => filter === searchForm.code),
    [searchForm.code, searchFilters]
  );

  const handleChange = (
    key: keyof SearchFormType,
    value: SearchFormType[keyof SearchFormType]
  ) => {
    setIsSearched(false);

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
    setIsSearched(true);
  };

  const handleSave = () => {
    onAddFilter(searchForm.code);
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
