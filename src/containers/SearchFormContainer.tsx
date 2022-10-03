import { FC, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { SearchForm as SearchFormType } from "../models/SearchForm";
import { LandCodeChildren } from "../models/LandCode";
import { useSearchFilterStore } from "../stores/searchFilterStore";
import { searchFormState } from "../stores/searchFormStore";
import landCodes from "../jsons/landCodes.json";
import SearchForm from "../components/SearchForm";
import { useTradeItemsQuery } from "../queries/getTradeItemsQuery";

interface SearchFormContainerProps {}

const getLandCodeItems = (cityName: string): LandCodeChildren[] =>
  landCodes.find((item) => item.name === cityName)?.children || [];

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const [isSkipQuery, setIsSkipQuery] = useState(false);
  const [form, setForm] = useRecoilState(searchFormState);

  const { searchFilters, onAddFilter } = useSearchFilterStore();
  useTradeItemsQuery(isSkipQuery, form);

  const landCodeItems = useMemo(
    () => getLandCodeItems(form.cityName),
    [form.cityName]
  );

  const isSavedSearchFilter = useMemo(
    () => searchFilters.some((filter) => filter === form.code),
    [form.code, searchFilters]
  );

  const handleChange = (
    key: keyof SearchFormType,
    value: SearchFormType[keyof SearchFormType]
  ) => {
    setIsSkipQuery(true);

    const afterForm = {
      ...form,
      [key]: value,
    };

    if (key === "cityName") {
      const landCodeItems = getLandCodeItems(afterForm.cityName);
      afterForm.code = landCodeItems[0].code || "";
    }

    setForm(afterForm);
  };

  const handleSearch = () => {
    setIsSkipQuery(false);
  };

  const handleSave = () => {
    onAddFilter(form.code);
  };

  return (
    <SearchForm
      form={form}
      isSavedSearchFilter={isSavedSearchFilter}
      landCodeItems={landCodeItems}
      onChange={handleChange}
      onSearch={handleSearch}
      onSave={handleSave}
    />
  );
};

export default SearchFormContainer;
