import { gql, useQuery } from "@apollo/client";
import { SearchForm } from "../models/SearchForm";
import { TradeItem } from "../models/TradeItem";

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

// export const useTradeItemsQuery = (skip: boolean, form: SearchForm) => {
//   return useQuery<{ tradeItems: TradeItem[] }>(GET_TRADE_ITEMS_QUERY, {
//     variables: {
//       tradeMonth: Number(form.year + form.month.padStart(2, "0")),
//       stateCode: Number(form.code),
//     },
//     skip,
//   });
// };
