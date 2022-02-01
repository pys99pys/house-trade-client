import { FC } from "react";
import classNames from "classnames";
import { ITradeItem } from "../hooks/useTradeItems";
import { amountFormat, averageAmountFormat } from "../utils/formatters";
import { border } from "../styles/variables";
import Button from "../elements/Button";

interface TradeItemsTableRowProps {
  grayBackground: boolean;
  item: ITradeItem;
  isFavorite: boolean;
  onSaveFavoriteItem: () => void;
  onRemoveFavoriteItem: () => void;
}

const TradeItemsTableRow: FC<TradeItemsTableRowProps> = ({
  grayBackground,
  item,
  isFavorite,
  onSaveFavoriteItem,
  onRemoveFavoriteItem,
}) => {
  return (
    <tr
      className={classNames({
        "bg-gray-50": grayBackground,
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
          {item.flastSize}평{" "}
          <small className="ml-1 text-gray-500">({item.areaSize}㎡)</small>
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
            ({averageAmountFormat(item.tradeAmount / item.flastSize)})
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

export default TradeItemsTableRow;
