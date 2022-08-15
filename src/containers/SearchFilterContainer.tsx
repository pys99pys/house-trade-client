import { FC, useMemo } from "react";
import { useRecoilState } from "recoil";
import { SearchFilterItem } from "../models/SearchFilter";
import { searchFilterState } from "../stores/searchFilterStore";
import { searchFormState } from "../stores/searchFormStore";
import {
  getCityItemWithCode,
  getCodeItemWithCode,
} from "../utils/searchFilter";
import SearchFilter from "../components/SearchFilter";

interface SearchFilterContainerProps {}

const SearchFilterContainer: FC<SearchFilterContainerProps> = () => {
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilterState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  const handleClick = (code: string) => {
    const cityItem = getCityItemWithCode(code);

    if (cityItem) {
      setSearchForm({
        ...searchForm,
        cityName: cityItem.name,
        code,
      });
    }
  };

  const handleRemove = (targetCode: string) =>
    setSearchFilter(searchFilter.filter((code) => code !== targetCode));

  const filterItems = useMemo(
    () =>
      searchFilter
        .map((code) => {
          const cityItem = getCityItemWithCode(code);
          const codeItem = getCodeItemWithCode(code);

          return cityItem && codeItem
            ? {
                code,
                label: `${cityItem.name} ${codeItem.name}`,
              }
            : null;
        })
        .filter((item) => item !== null) as SearchFilterItem[],
    [searchFilter]
  );

  return (
    <SearchFilter
      items={filterItems}
      onSelect={handleClick}
      onRemove={handleRemove}
    />
  );
};

export default SearchFilterContainer;
