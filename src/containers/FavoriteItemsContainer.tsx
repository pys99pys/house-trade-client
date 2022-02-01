import { FC } from "react";
import useFavoriteFiltersStore from "../hooks/useFavoriteFiltersStore";
import FavoriteFilterItems from "../components/FavoriteFilterItems";

const FavoriteFilterItemsContainer: FC = () => {
  const { favoriteFilters, onSelectFavoriteFilter, onRemoveFavoriteFilter } =
    useFavoriteFiltersStore();

  return (
    <FavoriteFilterItems
      favoriteFilters={favoriteFilters}
      onSelectFavoriteFilter={onSelectFavoriteFilter}
      onRemoveFavoriteFilter={onRemoveFavoriteFilter}
    />
  );
};

export default FavoriteFilterItemsContainer;
