import { FC } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IItemsSort } from "../stores/itemsSortStore";
import { ITradeItem } from "../hooks/useTradeItems2";
import { border } from "../styles/variables";
import Icon from "../elements/Icon";

interface TradeItemsTableHeadProps {
  itemsSort: IItemsSort;
  onChangeItemsSort: (column: keyof ITradeItem) => void;
}

const CLASS_NAME = `${border} p-5 bg-gray-100`;

const HEADER_ITEMS: { key: keyof ITradeItem; label: String }[] = [
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
    key: "flastSize",
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
];

const TradeItemsTableHead: FC<TradeItemsTableHeadProps> = ({
  itemsSort,
  onChangeItemsSort,
}) => {
  return (
    <tr>
      {HEADER_ITEMS.map((item) => (
        <th
          key={item.key}
          className={`${CLASS_NAME} hover:bg-gray-200 transition-colors cursor-pointer`}
          onClick={() => onChangeItemsSort(item.key)}
        >
          <div className="flex justify-center items-center">
            <span>{item.label}</span>
            {item.key === itemsSort.column && (
              <span className="ml-2">
                <Icon
                  icon={
                    itemsSort.direction === "asc" ? faChevronUp : faChevronDown
                  }
                />
              </span>
            )}
          </div>
        </th>
      ))}
      <th className={CLASS_NAME}>즐겨찾기</th>
    </tr>
  );
};

export default TradeItemsTableHead;
