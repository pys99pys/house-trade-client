import { FC, useState } from "react";
import { SearchForm as SearchFormType } from "../models/SearchForm";
import SearchForm from "../components/SearchForm";

interface SearchFormContainerProps {}

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const [form, setForm] = useState<SearchFormType>({
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
    code: null,
  });

  return <SearchForm form={form} />;
};

export default SearchFormContainer;
