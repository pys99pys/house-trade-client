import { FC } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { Sort, TradeItem } from '../../models/TradeItem';
import { getAreaSize, getAverageAmount, getFlatSize, getTradeAmount, numberFormat } from '../../utils/formatter';
import Button from '../../elements/Button';
import IconPresenter from '../../elements/Icon/IconPresenter';
import css from './TradeTable.module.css';

interface TradeTablePresenterProps {
  isLoading: boolean;
  sort: Sort;
  items: TradeItem[];
  onClickTableHeader: (key: Sort[0]) => void;
}

const TradeTablePresenter: FC<TradeTablePresenterProps> = ({ isLoading, sort, items, onClickTableHeader }) => {
  return (
    <div className={css.tradeTable}>
      <div className={css.tableHeader}>
        <span>
          총 <strong>{numberFormat(items.length)}</strong>건
        </span>
      </div>
      <table className={css.table}>
        <colgroup>
          {['120', '120', '*', '150', '80', '80', '180', '80'].map((width, index) => (
            <col key={index} width={width} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {[
              {
                key: 'tradeDate',
                label: '거래일',
              },
              {
                key: 'address',
                label: '주소',
              },
              {
                key: 'apartName',
                label: '아파트명',
              },
              {
                key: 'areaSize',
                label: '평수',
              },
              {
                key: 'floor',
                label: '층',
              },
              {
                key: 'buildedYear',
                label: '연식',
              },
              {
                key: 'tradeAmount',
                label: '거래금액',
              },
              {
                key: 'favorite',
                label: '즐겨찾기',
              },
            ].map((item) => (
              <th key={item.key}>
                <button onClick={() => onClickTableHeader(item.key as Sort[0])}>
                  {item.label}
                  {sort[0] === item.key && (
                    <span className={css[sort[1]]}>
                      <IconPresenter icon={<FaChevronUp />} />
                    </span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={8}>
                <div className={css.loadingWrap}>
                  <span className={css.spinner} />
                  데이터를 조회하고 있습니다.{' '}
                </div>
              </td>
            </tr>
          )}
          {!isLoading &&
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.tradeDate}</td>
                <td>{item.address}</td>
                <td>{item.apartName}</td>
                <td>
                  <div>
                    {getFlatSize(item.areaSize)}평 <small>({getAreaSize(item.areaSize)}㎡)</small>
                  </div>
                </td>
                <td>{item.floor}</td>
                <td>{item.buildedYear}</td>
                <td>
                  <div>
                    <strong>{getTradeAmount(item.tradeAmount)}억원</strong>
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
        </tbody>
      </table>
    </div>
  );
};

export default TradeTablePresenter;
