import { FC } from "react";
import { FavoriteFilterItem as FavoriteFilterItemType } from "../models/filterModels";
import FavoriteFilterItem from "./FavoriteFilterItem";

interface FavoriteFilterItemsProps {
  items: FavoriteFilterItemType[];
  onSelect: (stateCode: string) => void;
  onRemove: (stateCode: string) => void;
}

const FavoriteFilterItems: FC<FavoriteFilterItemsProps> = ({
  items,
  onSelect,
  onRemove,
}) => {
  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <span key={item.stateCode} className="mr-1 mb-1">
          <FavoriteFilterItem
            item={item}
            onClick={() => onSelect(item.stateCode)}
            onClickRemoveButton={() => onRemove(item.stateCode)}
          />
        </span>
      ))}
    </div>
  );
};

export default FavoriteFilterItems;
