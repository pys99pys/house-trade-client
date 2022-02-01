import { FC } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IItemsSort } from "../stores/itemsSortStore";
import { ITradeItem } from "../hooks/useTradeItems";
import { border } from "../styles/variables";
import Icon from "../elements/Icon";

interface TradeItemsTableHeadProps {
  itemsSort: IItemsSort;
  onChangeItemsSort: (column: keyof ITradeItem) => void;
}

interface HeaderItem {
  key: keyof ITradeItem;
  label: String;
  minWidth: string;
}

const CLASS_NAME = `${border} p-5 bg-gray-100`;

const HEADER_ITEMS: HeaderItem[] = [
  {
    key: "tradeDate",
    label: "거래일",
    minWidth: "90px",
  },
  {
    key: "address",
    label: "주소",
    minWidth: "100px",
  },
  {
    key: "apartName",
    label: "아파트명",
    minWidth: "120px",
  },
  {
    key: "flastSize",
    label: "평수",
    minWidth: "80px",
  },
  {
    key: "floor",
    label: "층",
    minWidth: "40px",
  },
  {
    key: "buildedYear",
    label: "연식",
    minWidth: "60px",
  },
  {
    key: "tradeAmount",
    label: "거래금액",
    minWidth: "100px",
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
          style={{ minWidth: item.minWidth }}
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
      <th style={{ minWidth: "80px" }} className={CLASS_NAME}>
        즐겨찾기
      </th>
    </tr>
  );
};

export default TradeItemsTableHead;
