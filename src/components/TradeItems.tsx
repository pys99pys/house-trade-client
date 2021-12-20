import { FC } from "react";
import classNames from "classnames";
import { border } from "../styles/variables";
import { TradeItem } from "../models/tradeItemModels";
import { amountFormat, averageAmountFormat } from "../utils/formatUtils";

interface TradeItemsProps {
  isLoading: boolean;
  items: TradeItem[];
}

const tableHeaderLabels = [
  "거래일",
  "주소",
  "아파트명",
  "평수",
  "층",
  "연식",
  "거래금액",
];

const TradeItems: FC<TradeItemsProps> = ({ isLoading, items }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {tableHeaderLabels.map((label) => (
            <th
              key={label}
              className={classNames(border, "bg-gray-100", "p-5")}
            >
              <span>{label}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td
              colSpan={tableHeaderLabels.length}
              className={classNames(border, "py-14 bg-gray-50 text-center")}
            >
              데이터를 불러오고 있습니다.
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
                  {amountFormat(item.amount)}
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
