import { FC } from "react";
import {
  faSpinner,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { TradeItem } from "../models/tradeItemModels";
import { Sort, OnChangeSortHandler } from "../hooks/useItemsSort";
import { amountFormat, averageAmountFormat } from "../utils/formatUtils";
import { border } from "../styles/variables";
import Icon from "../elements/Icon";

interface TradeItemsProps {
  isLoading: boolean;
  items: TradeItem[];
  sort: Sort;
  onChangeSort: OnChangeSortHandler;
}

const tableItems: { key: keyof TradeItem; label: String }[] = [
  {
    key: "date",
    label: "거래일",
  },
  {
    key: "address",
    label: "주소",
  },
  {
    key: "name",
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
    key: "amount",
    label: "거래금액",
  },
];

const TradeItems: FC<TradeItemsProps> = ({
  isLoading,
  items,
  sort,
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
              onClick={() => onChangeSort(item.key)}
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
          items.map((item, index) => (
            <tr key={index}>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                {item.date}
              </td>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                {item.address}
              </td>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                {item.name}
              </td>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                <span className="inline-flex items-center">
                  {item.sizeFlat}평{" "}
                  <small className="ml-1 text-gray-500">
                    ({item.sizeArea}㎡)
                  </small>
                </span>
              </td>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                {item.floor}
              </td>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                {item.buildedYear}
              </td>
              <td
                className={classNames(border, "p-4 text-center", {
                  "bg-gray-50": index % 2 === 0,
                })}
              >
                <span className="inline-flex items-center">
                  <strong>{amountFormat(item.amount)}</strong>
                  <small className="ml-1 text-gray-500">
                    ({averageAmountFormat(item.amount / item.sizeFlat)})
                  </small>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TradeItems;
