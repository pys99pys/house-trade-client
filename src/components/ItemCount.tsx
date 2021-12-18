import { FC } from "react";

interface ItemCountProps {
  count: number;
}

const ItemCount: FC<ItemCountProps> = ({ count }) => {
  return (
    <span>
      총 <strong>{count}</strong>건
    </span>
  );
};

export default ItemCount;
