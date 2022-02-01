import { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import searchFormStore from "../stores/searchFormStore";
import favoriteFilterStore, {
  setFavoriteStateCodeToStorage,
  removeFavoriteStateCodeToStorage,
} from "../stores/favoriteFiltersStore";
import { getCityNameWithStateCode } from "../utils/helpers";

type OnSaveFavoriteFilterHandler = (stateCode: string) => void;

type OnSelectFavoriteFilterHandler = (stateCode: string) => void;

type OnRemoveFavoriteFilterHandler = (stateCode: string) => void;

interface Return {
  favoriteFilters: string[];
  onSaveFavoriteFilter: OnSaveFavoriteFilterHandler;
  onSelectFavoriteFilter: OnSelectFavoriteFilterHandler;
  onRemoveFavoriteFilter: OnRemoveFavoriteFilterHandler;
}

const useFavoriteFilterStore = (): Return => {
  const setSearchFormStore = useSetRecoilState(searchFormStore);

  const [favoriteFilters, setFavoriteFilters] =
    useRecoilState(favoriteFilterStore);

  const onSaveFavoriteFilter: OnSaveFavoriteFilterHandler = useCallback(
    (stateCode) => {
      const afterFavoriteFilters = setFavoriteStateCodeToStorage(stateCode);
      setFavoriteFilters(afterFavoriteFilters);
    },
    [setFavoriteFilters]
  );

  const onSelectFavoriteFilter: OnSelectFavoriteFilterHandler = useCallback(
    (stateCode) => {
      const cityName = getCityNameWithStateCode(stateCode);

      if (cityName) {
        setSearchFormStore((prevSearchForm) => ({
          ...prevSearchForm,
          cityName,
          stateCode,
        }));
      }
    },
    [setSearchFormStore]
  );

  const onRemoveFavoriteFilter: OnRemoveFavoriteFilterHandler = useCallback(
    (stateCode) => {
      const afterFavoriteFilters = removeFavoriteStateCodeToStorage(stateCode);
      setFavoriteFilters(afterFavoriteFilters);
    },
    [setFavoriteFilters]
  );

  return {
    favoriteFilters,
    onSaveFavoriteFilter,
    onSelectFavoriteFilter,
    onRemoveFavoriteFilter,
  };
};

export default useFavoriteFilterStore;
