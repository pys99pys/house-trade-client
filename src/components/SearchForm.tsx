import { FC } from "react";
import { SearchForm as SearchFormType } from "../models/SearchForm";
import Button from "./Button";
import css from "./SearchForm.module.css";

interface SearchFormProps {
  form: SearchFormType;
  landCodeItems: {
    code: string;
    name: string;
  }[];
  onChange: (
    key: keyof SearchFormType,
    value: SearchFormType[keyof SearchFormType]
  ) => void;
  onSave: () => void;
}

const SearchForm: FC<SearchFormProps> = ({
  form,
  landCodeItems,
  onChange,
  onSave,
}) => {
  return (
    <form className={css.searchForm}>
      <select
        value={form.year}
        onChange={(e) => onChange("year", e.target.value)}
      >
        {Array(new Date().getFullYear() - 1999)
          .fill(null)
          .map((_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>
              {new Date().getFullYear() - i}년
            </option>
          ))}
      </select>
      <select
        value={form.month}
        onChange={(e) => onChange("month", e.target.value)}
      >
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}월
            </option>
          ))}
      </select>
      <select
        value={form.cityName}
        onChange={(e) => onChange("cityName", e.target.value)}
      >
        <option value="서울시">서울시</option>
        <option value="경기도">경기도</option>
      </select>
      <select
        value={form.code}
        onChange={(e) => onChange("code", e.target.value)}
      >
        <option value="">시/군/구 선택</option>
        {landCodeItems.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
      <Button color="yellow">저장</Button>
      <Button color="primary">검색</Button>
    </form>
  );
};

export default SearchForm;