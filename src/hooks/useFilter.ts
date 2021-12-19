import { useCallback, useState } from "react";
import { FilterItem } from "../models/filterModels";

type OnSaveFilterHandler = (item: FilterItem) => void;
type OnRemoveFilterHandler = (stateCode: string) => void;

interface ReturnType {
  filters: FilterItem[];
  onSaveFilter: OnSaveFilterHandler;
  onRemoveFilter: OnRemoveFilterHandler;
}

const getFilters = (): FilterItem[] => {
  try {
    const savedFilters = window.localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : [];
  } catch {
    return [];
  }
};

const setFilter = (item: FilterItem): FilterItem[] => {
  const filters = getFilters();
  const alreadyAdded = !!filters.find(
    (filter) => filter.stateCode === item.stateCode
  );

  if (alreadyAdded) {
    return getFilters();
  }

  const afterFilters = [...filters, item];
  const sortedFilters = afterFilters.sort((a, b) => {
    const valueA = `${a.cityName} ${a.stateName}`;
    const valueB = `${b.cityName} ${b.stateName}`;

    if (valueA > valueB) return 1;
    if (valueA < valueB) return -1;
    return 0;
  });

  window.localStorage.setItem("filters", JSON.stringify(sortedFilters));
  return getFilters();
};

const removeFilter = (stateCode: string): FilterItem[] => {
  const filters = getFilters();
  const afterFilters = filters.filter((item) => item.stateCode !== stateCode);

  window.localStorage.setItem("filters", JSON.stringify(afterFilters));
  return getFilters();
};

const useFilter = (): ReturnType => {
  const [filters, setFilters] = useState<FilterItem[]>(getFilters());

  const onSaveFilter: OnSaveFilterHandler = useCallback((item) => {
    const afterFilters = setFilter(item);
    setFilters(afterFilters);
  }, []);

  const onRemoveFilter: OnRemoveFilterHandler = useCallback(
    (stateCode: string) => {
      const afterFilters = removeFilter(stateCode);
      setFilters(afterFilters);
    },
    []
  );

  return {
    filters,
    onSaveFilter,
    onRemoveFilter,
  };
};

export default useFilter;
