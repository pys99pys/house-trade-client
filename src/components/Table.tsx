import { FC } from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from "./Button";
import Icon from "./Icon";
import css from "./Table.module.css";

interface TableProps {}

const Table: FC<TableProps> = () => {
  return (
    <div>
      <div className={css.tableHeader}>
        <span>
          총 <strong>320</strong>건
        </span>
      </div>
      <table className={css.table}>
        <thead>
          <tr>
            <th>
              <div>
                거래일
                <span>
                  <Icon icon={<FaChevronDown />} />
                </span>
              </div>
            </th>
            <th>주소</th>
            <th>아파트명</th>
            <th>평수</th>
            <th>층</th>
            <th>연식</th>
            <th>거래금액</th>
            <th>즐겨찾기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022-07-06</td>
            <td>감이동</td>
            <td>감일한라비발디</td>
            <td>
              <div>
                34평 <small>(84.87㎡)</small>
              </div>
            </td>
            <td>16</td>
            <td>2019</td>
            <td>
              <div>
                10.6억원<small>(3,117만원/평)</small>
              </div>
            </td>
            <td>
              <Button size="small" color="yellow">
                추가
              </Button>
            </td>
          </tr>
          <tr>
            <td>2022-07-06</td>
            <td>감이동</td>
            <td>감일한라비발디</td>
            <td>
              <div>
                34평 <small>(84.87㎡)</small>
              </div>
            </td>
            <td>16</td>
            <td>2019</td>
            <td>
              <div>
                10.6억원<small>(3,117만원/평)</small>
              </div>
            </td>
            <td>
              <Button size="small" color="yellow">
                추가
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
