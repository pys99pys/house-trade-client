import { FC } from "react";
import classNames from "classnames";
import { border } from "../styles/variables";

interface ItemTableProps {}

const ItemTable: FC<ItemTableProps> = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {["거래일", "주소", "아파트명", "평수", "층", "연식", "거래금액"].map(
            (label) => (
              <th
                key={label}
                className={classNames(border, "bg-gray-50", "p-5")}
              >
                <span>{label}</span>
              </th>
            )
          )}
        </tr>
      </thead>
    </table>
  );
};

export default ItemTable;
