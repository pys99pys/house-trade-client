import { FC, useCallback, useState } from "react";
import landCodes from "../jsons/landCodes.json";
import SearchForm from "../components/SearchForm";
import { SearchForm as SearchFormType } from "../models/searchFormModels";

interface SearchFormContainerProps {}

const getFirstStateItem = (cityName: string): string => {
  return (
    landCodes.find((item) => item.name === cityName)?.children?.[0].code || ""
  );
};

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const [form, setForm] = useState<SearchFormType>({
    date: new Date().toISOString().substring(0, 7),
    cityName: "",
    stateCode: "",
  });

  const onChangeDate = useCallback(
    (date: string) =>
      setForm({
        ...form,
        date,
      }),
    [form]
  );

  const onChangeCityName = useCallback(
    (cityName: string) => {
      setForm({
        ...form,
        cityName,
        stateCode: getFirstStateItem(cityName),
      });
    },
    [form]
  );

  const onChangeStateCode = useCallback(
    (stateCode: string) =>
      setForm({
        ...form,
        stateCode,
      }),
    [form]
  );

  return (
    <SearchForm
      form={form}
      onChangeDate={onChangeDate}
      onChangeCityName={onChangeCityName}
      onChangeStateCode={onChangeStateCode}
    />
  );
};

export default SearchFormContainer;
