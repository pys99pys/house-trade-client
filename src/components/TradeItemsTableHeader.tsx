import { FC } from "react";
import { IItemsFilter } from "../stores/itemsFilterStore";
import TradeItemsFilter from "./TradeItemsFilter";
import TradeItemsSummary from "./TradeItemsSummary";

interface TradeItemsTableHeaderProps {
  tradeItemsCount: number;
  tradeAmountAverage: number;
  itemsFilters: IItemsFilter;
  onChangeItemsFilter: (targetItemsFilters: Partial<IItemsFilter>) => void;
}

const TradeItemsTableHeader: FC<TradeItemsTableHeaderProps> = ({
  tradeItemsCount,
  tradeAmountAverage,
  itemsFilters,
  onChangeItemsFilter,
}) => {
  return (
    <div className="flex justify-between">
      <TradeItemsSummary
        tradeItemsCount={tradeItemsCount}
        tradeAmountAverage={tradeAmountAverage}
      />
      <TradeItemsFilter
        filters={itemsFilters}
        onChangeFilter={onChangeItemsFilter}
      />
    </div>
  );
};

export default TradeItemsTableHeader;
