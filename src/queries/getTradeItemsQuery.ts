import { gql } from '@apollo/client';

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
