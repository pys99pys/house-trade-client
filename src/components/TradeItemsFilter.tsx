import { FC } from "react";
import Checkbox from "../elements/Checkbox";
import { IItemsFilter } from "../stores/itemsFilterStore";

interface TradeItemsFilterProps {
  filters: IItemsFilter;
  onChangeFilter: (targetFilters: Partial<IItemsFilter>) => void;
}

const TradeItemsFilter: FC<TradeItemsFilterProps> = ({
  filters,
  onChangeFilter,
}) => {
  return (
    <div className="flex items-center">
      <Checkbox
        size="small"
        checked={filters.isOnlyShowFavoriteItems}
        onClick={() =>
          onChangeFilter({
            isOnlyShowFavoriteItems: !filters.isOnlyShowFavoriteItems,
          })
        }
      >
        즐겨찾기만 보기
      </Checkbox>
    </div>
  );
};

export default TradeItemsFilter;
