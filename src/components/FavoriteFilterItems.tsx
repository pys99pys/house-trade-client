import { FC } from "react";
import useFavoriteFiltersStore from "../hooks/useFavoriteFiltersStore";
import FavoriteFilterItem from "./FavoriteFilterItem";

const FavoriteFilterItems: FC = () => {
  const { favoriteFilters, onSelectFavoriteFilter, onRemoveFavoriteFilter } =
    useFavoriteFiltersStore();

  return (
    <div className="flex flex-wrap">
      {favoriteFilters.map((stateCode) => (
        <span key={stateCode} className="mr-1 mb-1">
          <FavoriteFilterItem
            stateCode={stateCode}
            onClick={() => onSelectFavoriteFilter(stateCode)}
            onClickRemoveButton={() => onRemoveFavoriteFilter(stateCode)}
          />
        </span>
      ))}
    </div>
  );
};

export default FavoriteFilterItems;
