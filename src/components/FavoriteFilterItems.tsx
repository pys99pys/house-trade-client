import { FC } from "react";
import FavoriteFilterItem from "./FavoriteFilterItem";

interface FavoriteFilterItemsProps {
  favoriteFilters: string[];
  onSelectFavoriteFilter: (stateCode: string) => void;
  onRemoveFavoriteFilter: (stateCode: string) => void;
}

const FavoriteFilterItems: FC<FavoriteFilterItemsProps> = ({
  favoriteFilters,
  onSelectFavoriteFilter,
  onRemoveFavoriteFilter,
}) => {
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
