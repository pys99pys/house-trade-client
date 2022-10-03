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

          return {
            code: codeItem?.code || "",
            label:
              cityItem && codeItem ? `${cityItem.name} ${codeItem.name}` : "",
          };
        })
        .filter((item) => item !== null)
        .sort((a, b) => (a.label > b.label ? 1 : -1)),
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
