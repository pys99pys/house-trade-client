import { FC } from "react";
import { TradeItem } from "../models/tradeItemModels";
import ItemsTable from "../components/ItemsTable";
import Summary from "../components/Summary";
import useItemsFilter from "../hooks/useItemsFilter";

interface ItemsTableContainerProps {
  isLoading: boolean;
  items: TradeItem[];
}

const ItemsTableContainer: FC<ItemsTableContainerProps> = ({
  isLoading,
  items,
}) => {
  const {} = useItemsFilter(items);

  return (
    <>
      <Summary count={items.length} />
      <div className="mt-2">
        <ItemsTable isLoading={isLoading} items={items} />
      </div>
    </>
  );
};

export default ItemsTableContainer;
