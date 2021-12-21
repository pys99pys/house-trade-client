import { FC } from "react";
import classNames from "classnames";
import { TradeItem as TradeItemType } from "../models/tradeItemModels";
import { FavoriteItem } from "../models/favoriteItemsModel";
import { amountFormat, averageAmountFormat } from "../utils/formatUtils";
import { border } from "../styles/variables";
import Button from "../elements/Button";

interface TradeItemProps {
  index: number;
  item: TradeItemType;
  favoriteItem: FavoriteItem | undefined;
  stateCode: string;
  onSaveFavoriteItem: (favoriteItem: Omit<FavoriteItem, "id">) => void;
  onRemoveFavoriteItem: (id: number) => void;
}

const TradeItem: FC<TradeItemProps> = ({
  index,
  item,
  favoriteItem,
  stateCode,
  onSaveFavoriteItem,
  onRemoveFavoriteItem,
}) => {
  return (
    <tr
      className={classNames({
        "bg-gray-50": index % 2 === 0,
      })}
    >
      <td className={classNames(border, "p-4 text-center")}>{item.date}</td>
      <td className={classNames(border, "p-4 text-center")}>{item.address}</td>
      <td className={classNames(border, "p-4 text-center")}>{item.name}</td>
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
          <strong>{amountFormat(item.amount)}</strong>
          <small className="ml-1 text-gray-500">
            ({averageAmountFormat(item.amount / item.sizeFlat)})
          </small>
        </span>
      </td>
      <td className={classNames(border, "p-4 text-center")}>
        {favoriteItem && (
          <Button
            size="small"
            color="red"
            onClick={() => onRemoveFavoriteItem(favoriteItem.id)}
          >
            삭제
          </Button>
        )}

        {!favoriteItem && (
          <Button
            size="small"
            color="yellow"
            onClick={() =>
              onSaveFavoriteItem({
                stateCode,
                apartName: item.name,
                address: item.address,
              })
            }
          >
            추가
          </Button>
        )}
      </td>
    </tr>
  );
};

export default TradeItem;
