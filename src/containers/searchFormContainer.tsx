import { FC, useCallback, useState } from "react";
import SearchForm from "../components/SearchForm";
import { SearchForm as SearchFormType } from "../models/searchFormModels";

interface SearchFormContainerProps {
  onSubmit: (date: string, stateCode: string) => void;
}

const SearchFormContainer: FC<SearchFormContainerProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<SearchFormType>({
    date: new Date().toISOString().substring(0, 7),
    cityName: "",
    stateCode: "",
  });

  const onChangeDate = useCallback(
    (date: string) => {
      const afterForm = {
        ...form,
        date,
      };

      setForm(afterForm);

      if (afterForm.date && afterForm.stateCode) {
        onSubmit(afterForm.date, afterForm.stateCode);
      }
    },
    [form, onSubmit]
  );

  const onChangeCityName = useCallback(
    (cityName: string) => {
      setForm({
        ...form,
        cityName,
        stateCode: "",
      });
    },
    [form]
  );

  const onChangeStateCode = useCallback(
    (stateCode: string) => {
      const afterForm = {
        ...form,
        stateCode,
      };

      setForm(afterForm);

      if (afterForm.date && afterForm.stateCode) {
        onSubmit(afterForm.date, afterForm.stateCode);
      }
    },
    [form, onSubmit]
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
