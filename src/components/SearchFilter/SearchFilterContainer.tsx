import { FC, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { searchFiltersState, searchFormState } from '../../stores/mainPageStore';
import { getCityItem, getCodeItem, removeStorageData } from '../../utils/searchFilter';
import SearchFilterPresenter from './SearchFilterPresenter';

const SearchFilterContainer: FC = () => {
  const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  const filterItems = useMemo(
    () =>
      searchFilters
        .map((code) => {
          const cityItem = getCityItem(code);
          const codeItem = getCodeItem(code);

          return {
            code: codeItem?.code || '',
            label: cityItem && codeItem ? `${cityItem.name} ${codeItem.name}` : '',
          };
        })
        .filter((item) => item !== null)
        .sort((a, b) => (a.label > b.label ? 1 : -1)),
    [searchFilters]
  );

  const handleSelect = (code: string) => {
    const cityItem = getCityItem(code);

    if (cityItem) {
      setSearchForm({
        ...searchForm,
        cityName: cityItem.name,
        code,
      });
    }
  };

  const handleRemove = (code: string) => {
    const afterFilter = removeStorageData(code);
    setSearchFilters(afterFilter);
  };

  return <SearchFilterPresenter items={filterItems} onSelect={handleSelect} onRemove={handleRemove} />;
};

export default SearchFilterContainer;
