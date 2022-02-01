import { FC } from "react";
import useFavoriteFiltersStore from "../hooks/useFavoriteFiltersStore";
import FavoriteFilterItems from "../components/FavoriteFilterItems";

const FavoriteFilterItemsContainer: FC = () => {
  const { favoriteFilters, onSelectFavoriteFilter, onRemoveFavoriteFilter } =
    useFavoriteFiltersStore();

  return (
    <>
      {favoriteFilters.map((stateCode) => (
        <span key={stateCode} className="mr-1 mb-1">
          <FavoriteFilterItems
            favoriteFilters={favoriteFilters}
            onSelectFavoriteFilter={() => onSelectFavoriteFilter(stateCode)}
            onRemoveFavoriteFilter={() => onRemoveFavoriteFilter(stateCode)}
          />
        </span>
      ))}
    </>
  );
};

export default FavoriteFilterItemsContainer;
