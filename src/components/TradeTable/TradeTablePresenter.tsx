import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TradeItem } from '../../models/TradeItem';
import { getAreaSize, getAverageAmount, getFlatSize, getTradeAmount, numberFormat } from '../../utils/formatter';
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
        <colgroup>
          <col width="120" />
          <col width="120" />
          <col width="*" />
          <col width="150" />
          <col width="80" />
          <col width="80" />
          <col width="180" />
          <col width="80" />
        </colgroup>
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
        </tbody>
      </table>
    </div>
  );
};

export default TradeTablePresenter;
