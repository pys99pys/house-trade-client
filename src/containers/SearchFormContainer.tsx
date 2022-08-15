import { FC, useMemo } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { SearchForm as SearchFormType } from "../models/SearchForm";
import { searchFormState } from "../stores/searchFormStore";
import { searchFilterState } from "../stores/searchFilterStore";
import landCodes from "../jsons/landCodes.json";
import SearchForm from "../components/SearchForm";

interface SearchFormContainerProps {}

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const [form, setForm] = useRecoilState(searchFormState);
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilterState);

  const landCodeItems = useMemo(
    () => landCodes.find((item) => item.name === form.cityName)?.children || [],
    [form.cityName]
  );

  const handleChange = (
    key: keyof SearchFormType,
    value: SearchFormType[keyof SearchFormType]
  ) => {
    const afterForm = {
      ...form,
      [key]: value,
    };

    if (key === "cityName") {
      afterForm.code = "";
    }

    setForm(afterForm);
  };

  const handleSave = () => {
    setSearchFilter([...new Set([...searchFilter, form.code])]);
  };

  return (
    <SearchForm
      form={form}
      landCodeItems={landCodeItems}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

export default SearchFormContainer;
