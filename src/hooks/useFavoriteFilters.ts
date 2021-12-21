import { useCallback, useState } from "react";
import { FavoriteFilterItem } from "../models/filterModels";

type OnSaveFavoriteFilterHandler = (item: FavoriteFilterItem) => void;
type OnRemoveFavoriteFilterHandler = (stateCode: string) => void;

interface ReturnType {
  filters: FavoriteFilterItem[];
  onSaveFavoriteFilter: OnSaveFavoriteFilterHandler;
  onRemoveFavoriteFilter: OnRemoveFavoriteFilterHandler;
}

const getFilters = (): FavoriteFilterItem[] => {
  try {
    const savedFilters = window.localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : [];
  } catch {
    return [];
  }
};

const setFilter = (item: FavoriteFilterItem): FavoriteFilterItem[] => {
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

const removeFilter = (stateCode: string): FavoriteFilterItem[] => {
  const filters = getFilters();
  const afterFilters = filters.filter((item) => item.stateCode !== stateCode);

  window.localStorage.setItem("filters", JSON.stringify(afterFilters));
  return getFilters();
};

const useFavoriteFilters = (): ReturnType => {
  const [filters, setFilters] = useState<FavoriteFilterItem[]>(getFilters());

  const onSaveFavoriteFilter: OnSaveFavoriteFilterHandler = useCallback(
    (item) => {
      const afterFilters = setFilter(item);
      setFilters(afterFilters);
    },
    []
  );

  const onRemoveFavoriteFilter: OnRemoveFavoriteFilterHandler = useCallback(
    (stateCode: string) => {
      const afterFilters = removeFilter(stateCode);
      setFilters(afterFilters);
    },
    []
  );

  return {
    filters,
    onSaveFavoriteFilter,
    onRemoveFavoriteFilter,
  };
};

export default useFavoriteFilters;
