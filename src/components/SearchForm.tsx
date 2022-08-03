import { FC } from "react";
import { SearchForm as SearchFormType } from "../models/SearchForm";
import css from "./SearchForm.module.css";

interface SearchFormProps {
  form: SearchFormType;
}

const SearchForm: FC<SearchFormProps> = ({ form }) => {
  return (
    <form className={css.searchForm}>
      <select value="2022">
        <option value="2022">2022년</option>
      </select>
      <select value="8">
        <option value="8">8월</option>
      </select>
      <select value="서울시">
        <option value="서울시">서울시</option>
      </select>
      <select value="강동구">
        <option value="강동구">강동구</option>
      </select>
      <button type="button" className="yellow">
        저장
      </button>
      <button type="submit" className="primary">
        검색
      </button>
    </form>
  );
};

export default SearchForm;
