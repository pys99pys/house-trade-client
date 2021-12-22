import { FC } from "react";
import classNames from "classnames";
import { TradeItem as TradeItemType } from "../models/tradeItemModels";
import { amountFormat, averageAmountFormat } from "../utils/formatUtils";
import { border } from "../styles/variables";
import Button from "../elements/Button";

interface TradeItemProps {
  index: number;
  item: TradeItemType;
  isFavorite: boolean;
  onSaveFavoriteItem: () => void;
  onRemoveFavoriteItem: () => void;
}

const TradeItem: FC<TradeItemProps> = ({
  index,
  item,
  isFavorite,
  onSaveFavoriteItem,
  onRemoveFavoriteItem,
}) => {
  return (
    <tr
      className={classNames({
        "bg-gray-50": index % 2 === 0,
      })}
    >
      <td className={classNames(border, "p-4 text-center")}>
        {item.tradeDate}
      </td>
      <td className={classNames(border, "p-4 text-center")}>{item.address}</td>
      <td className={classNames(border, "p-4 text-center")}>
        {item.apartName}
      </td>
      <td className={classNames(border, "p-4 text-center")}>
        <span className="inline-flex items-center">
          {item.sizeFlat}평{" "}
          <small className="ml-1 text-gray-500">({item.sizeArea}㎡)</small>
        </span>
      </td>
      <td className={classNames(border, "p-4 text-center")}>{item.floor}</td>
      <td className={classNames(border, "p-4 text-center")}>
        {item.buildedYear}
      </td>
      <td className={classNames(border, "p-4 text-center")}>
        <span className="inline-flex items-center">
          <strong>{amountFormat(item.tradeAmount)}</strong>
          <small className="ml-1 text-gray-500">
            ({averageAmountFormat(item.tradeAmount / item.sizeFlat)})
          </small>
        </span>
      </td>
      <td className={classNames(border, "p-4 text-center")}>
        {isFavorite && (
          <Button size="small" color="red" onClick={onRemoveFavoriteItem}>
            삭제
          </Button>
        )}
        {!isFavorite && (
          <Button size="small" color="yellow" onClick={onSaveFavoriteItem}>
            추가
          </Button>
        )}
      </td>
    </tr>
  );
};

export default TradeItem;
