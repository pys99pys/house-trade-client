import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TradeItem } from '../../models/TradeItem';
import { getAverageAmount, getFlatSize, getTradeAmount, numberFormat } from '../../utils/formatter';
import Button from '../../elements/Button';
import IconPresenter from '../../elements/Icon/IconPresenter';
import css from './TradeTable.module.css';

interface TradeTablePresenterProps {
  isLoading: boolean;
  items: TradeItem[];
}

const TradeTablePresenter: FC<TradeTablePresenterProps> = ({ isLoading, items }) => {
  return (
    <div className={css.tradeTable}>
      <div className={css.tableHeader}>
        <span>
          총 <strong>{numberFormat(items.length)}</strong>건
        </span>
      </div>
      <table className={css.table}>
        <thead>
          <tr>
            <th>
              <div>
                거래일
                <span>
                  <IconPresenter icon={<FaChevronDown />} />
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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.tradeDate}</td>
              <td>{item.address}</td>
              <td>{item.apartName}</td>
              <td>
                <div>
                  {getFlatSize(item.areaSize)}평 <small>({item.areaSize}㎡)</small>
                </div>
              </td>
              <td>{item.floor}</td>
              <td>{item.buildedYear}</td>
              <td>
                <div>
                  {getTradeAmount(item.tradeAmount)}억원
                  <small>
                    ({numberFormat(getAverageAmount(item.tradeAmount, getFlatSize(item.areaSize)))}
                    만원/평)
                  </small>
                </div>
              </td>
              <td>
                <Button
                  size="small"
                  color="yellow"
                  onClick={() => {
                    alert('구현중');
                  }}
                >
                  추가
                </Button>
              </td>
            </tr>
          ))}

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

export default TradeTablePresenter;
