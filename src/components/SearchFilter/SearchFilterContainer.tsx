import { FC, useMemo } from "react";
import { useSearchFilterStore } from "../../stores/searchFilterStore";
import { useSearchFormStore } from "../../stores/searchFormStore";
import { getCityItem, getCodeItem } from "../../utils/searchFilter";
import SearchFilterPresenter from "./SearchFilterPresenter";

const SearchFilterContainer: FC = () => {
  const { searchFilters, onRemoveFilter } = useSearchFilterStore();
  const { searchForm, setSearchForm } = useSearchFormStore();

  const handleClick = (code: string) => {
    const cityItem = getCityItem(code);

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
          const cityItem = getCityItem(code);
          const codeItem = getCodeItem(code);

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
    <SearchFilterPresenter
      items={filterItems}
      onSelect={handleClick}
      onRemove={onRemoveFilter}
    />
  );
};

export default SearchFilterContainer;
