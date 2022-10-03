import { FC, useMemo } from "react";
import { useRecoilState } from "recoil";
import { SearchFilterItem } from "../models/SearchFilter";
import { useSearchFilterStore } from "../stores/searchFilterStore";
import { searchFormState } from "../stores/searchFormStore";
import {
  getCityItemWithCode,
  getCodeItemWithCode,
} from "../utils/searchFilter";
import SearchFilter from "../components/SearchFilter";

const SearchFilterContainer: FC = () => {
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);
  const { searchFilters, onRemoveFilter } = useSearchFilterStore();

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

  const filterItems = useMemo(
    () =>
      searchFilters
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
    [searchFilters]
  );

  return (
    <SearchFilter
      items={filterItems}
      onSelect={handleClick}
      onRemove={onRemoveFilter}
    />
  );
};

export default SearchFilterContainer;
