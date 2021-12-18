import { FC } from "react";
import ItemTable from "../components/ItemTable";
import { TradeItem } from "../models/tradeItemModels";

interface ItemTableContainerProps {
  isLoading: boolean;
  items: TradeItem[];
}

const ItemTableContainer: FC<ItemTableContainerProps> = ({
  isLoading,
  items,
}) => {
  return <ItemTable isLoading={isLoading} items={items} />;
};

export default ItemTableContainer;
