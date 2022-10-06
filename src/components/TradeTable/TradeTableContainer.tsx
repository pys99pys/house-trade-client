import { FC, useMemo, useState } from 'react';
import { Sort, TradeItem } from '../../models/TradeItem';
import { GET_TRADE_ITEMS_QUERY } from '../../queries/getTradeItemsQuery';
import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { searchTargetState } from '../../stores/mainPageStore';
import { getSortWithStorage, setSortWithStorage } from '../../utils/tradeItem';
import TradeTablePresenter from './TradeTablePresenter';

interface TradeTableContainerProps {}

const TradeTableContainer: FC<TradeTableContainerProps> = () => {
  const searchTarget = useRecoilValue(searchTargetState);
  const [sort, setSort] = useState<Sort>(getSortWithStorage() || ['tradeAmount', 'desc']);

  const { loading, data } = useQuery<{ tradeItems: TradeItem[] }>(GET_TRADE_ITEMS_QUERY, {
    variables: {
      tradeMonth: searchTarget?.tradeMonth,
      stateCode: searchTarget?.stateCode,
    },
    skip: searchTarget === null,
  });

  const sortedData = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.tradeItems.sort((a, b) => {
      if (sort[1] === 'asc') {
        return a[sort[0]] > b[sort[0]] ? 1 : a[sort[0]] < b[sort[0]] ? -1 : 0;
      }

      if (sort[1] === 'desc') {
        return a[sort[0]] > b[sort[0]] ? -1 : a[sort[0]] < b[sort[0]] ? 1 : 0;
      }

      return 0;
    });
  }, [data, sort]);

  const handleClickTableHeader = (key: Sort[0]) => {
    if (key === sort[0]) {
      setSort(setSortWithStorage([sort[0], sort[1] === 'asc' ? 'desc' : 'asc']));
    } else {
      setSort(setSortWithStorage([key, 'asc']));
    }
  };

  return (
    <TradeTablePresenter
      isLoading={loading}
      sort={sort}
      items={sortedData}
      onClickTableHeader={handleClickTableHeader}
    />
  );
};

export default TradeTableContainer;
