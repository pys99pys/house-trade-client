import { FC } from "react";
import {
  faSpinner,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { TradeItem as TradeItemType } from "../models/tradeItemModels";
import { FavoriteItem } from "../models/favoriteItemsModel";
import { Sort, OnChangeSortHandler } from "../hooks/useItemsSort";
import { border } from "../styles/variables";
import Icon from "../elements/Icon";
import TradeItem from "./TradeItem";

interface TradeItemsProps {
  isLoading: boolean;
  tradeItems: TradeItemType[];
  favoriteItems: FavoriteItem[];
  sort: Sort;
  stateCode: string;
  onSaveFavoriteItem: (favoriteItem: Omit<FavoriteItem, "id">) => void;
  onRemoveFavoriteItem: (id: number) => void;
  onChangeSort: OnChangeSortHandler;
}

const tableItems: { key: keyof TradeItemType | null; label: String }[] = [
  {
    key: "tradeDate",
    label: "거래일",
  },
  {
    key: "address",
    label: "주소",
  },
  {
    key: "apartName",
    label: "아파트명",
  },
  {
    key: "sizeFlat",
    label: "평수",
  },
  {
    key: "floor",
    label: "층",
  },
  {
    key: "buildedYear",
    label: "연식",
  },
  {
    key: "tradeAmount",
    label: "거래금액",
  },
  {
    key: null,
    label: "즐겨찾기",
  },
];

const TradeItems: FC<TradeItemsProps> = ({
  isLoading,
  tradeItems,
  favoriteItems,
  sort,
  stateCode,
  onSaveFavoriteItem,
  onRemoveFavoriteItem,
  onChangeSort,
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {tableItems.map((item) => (
            <th
              key={item.key}
              className={classNames(
                border,
                "p-5 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              )}
              onClick={() => item.key !== null && onChangeSort(item.key)}
            >
              <div className="flex justify-center items-center">
                <span>{item.label}</span>
                {item.key === sort.column && (
                  <span className="ml-2">
                    <Icon
                      icon={
                        sort.direction === "asc" ? faChevronUp : faChevronDown
                      }
                    />
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td
              colSpan={tableItems.length}
              className={classNames(border, "py-14 bg-gray-50 text-center")}
            >
              <span className="inline-block text-3xl text-gray-400 animate-spin">
                <Icon icon={faSpinner} />
              </span>
              <p className="mt-5">데이터를 불러오고 있습니다.</p>
            </td>
          </tr>
        )}

        {!isLoading &&
          tradeItems.map((item, index) => {
            const favoriteItem = favoriteItems.find(
              (favoriteItem) =>
                favoriteItem.address === item.address &&
                favoriteItem.apartName === item.apartName
            );

            return (
              <TradeItem
                index={index}
                item={item}
                favoriteItem={favoriteItem}
                stateCode={stateCode}
                onSaveFavoriteItem={onSaveFavoriteItem}
                onRemoveFavoriteItem={onRemoveFavoriteItem}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TradeItems;
