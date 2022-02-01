import { useCallback, useState } from "react";
import { IFavoriteFilterItem } from "../models/favoriteFilterModels";
import {
  getCityNameWithStateCode,
  getStateNameWithStateCode,
} from "../utils/helpers";

type OnSaveFavoriteFilterHandler = (stateCode: string) => void;
type OnRemoveFavoriteFilterHandler = (stateCode: string) => void;

interface ReturnType {
  favoriteFilters: IFavoriteFilterItem[];
  onSaveFavoriteFilter: OnSaveFavoriteFilterHandler;
  onRemoveFavoriteFilter: OnRemoveFavoriteFilterHandler;
}

const STORAGE_KEY = "FAVORITE_FILTERS";

const getFilters = (): IFavoriteFilterItem[] => {
  try {
    const savedFilters = window.localStorage.getItem(STORAGE_KEY);
    return savedFilters ? JSON.parse(savedFilters) : [];
  } catch {
    return [];
  }
};

const setFilter = (item: IFavoriteFilterItem): IFavoriteFilterItem[] => {
  const filters = getFilters();
  const alreadySaved = !!filters.find(
    (filter) => filter.stateCode === item.stateCode
  );

  if (alreadySaved) {
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

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedFilters));
  return getFilters();
};

const removeFilter = (stateCode: string): IFavoriteFilterItem[] => {
  const filters = getFilters();
  const afterFilters = filters.filter((item) => item.stateCode !== stateCode);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(afterFilters));
  return getFilters();
};

const useFavoriteFilters = (): ReturnType => {
  const [favoriteFilters, setFavoriteFilters] = useState<IFavoriteFilterItem[]>(
    getFilters()
  );

  const onSaveFavoriteFilter: OnSaveFavoriteFilterHandler = useCallback(
    (stateCode) => {
      const cityName = getCityNameWithStateCode(stateCode);
      const stateName = getStateNameWithStateCode(stateCode);

      if (cityName && stateName) {
        const afterFilters = setFilter({
          stateCode,
          cityName,
          stateName,
        });

        setFavoriteFilters(afterFilters);
      }
    },
    []
  );

  const onRemoveFavoriteFilter: OnRemoveFavoriteFilterHandler = useCallback(
    (stateCode: string) => {
      const afterFilters = removeFilter(stateCode);
      setFavoriteFilters(afterFilters);
    },
    []
  );

  return {
    favoriteFilters,
    onSaveFavoriteFilter,
    onRemoveFavoriteFilter,
  };
};

export default useFavoriteFilters;
