import { FC } from "react";
import Checkbox from "../elements/Checkbox";
import { ItemsFilter } from "../models/filterModels";

interface TradeItemsFilterProps {
  itemsFilter: ItemsFilter;
  onChangeItemsFilter: (itemsFilter: Partial<ItemsFilter>) => void;
}

const TradeItemsFilter: FC<TradeItemsFilterProps> = ({
  itemsFilter,
  onChangeItemsFilter,
}) => {
  return (
    <div>
      <Checkbox
        size="small"
        checked={itemsFilter.isShowFavoriteItems}
        onClick={() =>
          onChangeItemsFilter({
            isShowFavoriteItems: !itemsFilter.isShowFavoriteItems,
          })
        }
      >
        즐겨찾기만 보기
      </Checkbox>
    </div>
  );
};

export default TradeItemsFilter;
