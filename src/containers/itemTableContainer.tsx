import { FC } from "react";
import { TradeItem } from "../models/tradeItemModels";
import ItemTable from "../components/ItemTable";
import Summary from "../components/Summary";
import useItems from "../hooks/useItems";

interface ItemTableContainerProps {
  isLoading: boolean;
  items: TradeItem[];
}

const ItemTableContainer: FC<ItemTableContainerProps> = ({
  isLoading,
  items,
}) => {
  const {} = useItems(items);

  return (
    <>
      <Summary count={items.length} />
      <div className="mt-2">
        <ItemTable isLoading={isLoading} items={items} />
      </div>
    </>
  );
};

export default ItemTableContainer;
