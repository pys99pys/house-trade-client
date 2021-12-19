import { FC } from "react";
import { FilterItem as FilterItemType } from "../models/filterModels";
import FilterItem from "./FilterItem";

interface FilterItemsProps {
  items: FilterItemType[];
  onSelect: (stateCode: string) => void;
  onRemove: (stateCode: string) => void;
}

const FilterItems: FC<FilterItemsProps> = ({ items, onSelect, onRemove }) => {
  return (
    <div className="flex">
      {items.map((item) => (
        <span key={item.stateCode} className="mr-1">
          <FilterItem
            item={item}
            onClick={() => onSelect(item.stateCode)}
            onClickRemoveButton={() => onRemove(item.stateCode)}
          />
        </span>
      ))}
    </div>
  );
};

export default FilterItems;
