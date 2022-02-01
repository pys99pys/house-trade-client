import { FC } from "react";
import useSearchFormStore from "../hooks/useSearchFormStore";
import useFavoriteFiltersStore from "../hooks/useFavoriteFiltersStore";
import SearchForm from "../components/SearchForm";

interface SearchFormContainerProps {}

const SearchFormContainer: FC<SearchFormContainerProps> = () => {
  const {
    searchForm,
    onChangeTradeMonth,
    onChangeCityName,
    onChangeStateCode,
  } = useSearchFormStore();

  const { onSaveFavoriteFilter } = useFavoriteFiltersStore();

  return (
    <SearchForm
      searchForm={searchForm}
      onChangeTradeMonth={onChangeTradeMonth}
      onChangeCityName={onChangeCityName}
      onChangeStateCode={onChangeStateCode}
      onSaveFavoriteFilter={onSaveFavoriteFilter}
    />
  );
};

export default SearchFormContainer;
