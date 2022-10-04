import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { searchTargetState } from '../../stores/mainPageStore';
import { GET_TRADE_ITEMS_QUERY } from '../../queries/getTradeItemsQuery';
import { TradeItem } from '../../models/TradeItem';
import TradeTablePresenter from './TradeTablePresenter';

interface TradeTableContainerProps {}

const TradeTableContainer: FC<TradeTableContainerProps> = () => {
  const searchTarget = useRecoilValue(searchTargetState);

  const { loading, data } = useQuery<{ tradeItems: TradeItem[] }>(GET_TRADE_ITEMS_QUERY, {
    variables: {
      tradeMonth: searchTarget?.tradeMonth,
      stateCode: searchTarget?.stateCode,
    },
    skip: searchTarget === null,
  });

  return <TradeTablePresenter isLoading={loading} items={data?.tradeItems || []} />;
};

export default TradeTableContainer;
