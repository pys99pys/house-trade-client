import { gql, useQuery } from '@apollo/client';
import { SearchForm } from '../models/SearchForm';
import { TradeItem } from '../models/TradeItem';

export interface GetTradeItemsResult {
  tradeItems: TradeItem[];
}

export const GET_TRADE_ITEMS_QUERY = gql`
  query GetTradeItems($tradeMonth: Float!, $stateCode: Float!) {
    tradeItems(tradeMonth: $tradeMonth, stateCode: $stateCode) {
      address
      apartName
      areaSize
      buildedYear
      flastSize
      floor
      tradeAmount
      tradeDate
    }
  }
`;
