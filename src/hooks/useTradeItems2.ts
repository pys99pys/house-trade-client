import { useRecoilValue } from "recoil";
import { useQuery, gql } from "@apollo/client";
import searchFormStore from "../stores/searchFormStore";
import favoriteItemsStore from "../stores/favoriteItemsStore";
import itemsSortStore, { IItemsSort } from "../stores/itemsSortStore";
import itemsFilterStore, { IItemsFilter } from "../stores/itemsFilterStore";
import { useMemo } from "react";
import { getFavoriteItemKey } from "../utils/helpers";

export interface ITradeItem {
  address: string;
  apartName: string;
  areaSize: number;
  buildedYear: number;
  flastSize: number;
  floor: number;
  tradeAmount: number;
  tradeDate: string;
}

interface Return {
  loading: boolean;
  tradeItems: ITradeItem[];
  tradeAmountAverage: number;
}

const filterTradeItems = (
  items: ITradeItem[],
  filters: IItemsFilter,
  params: {
    stateCode: string;
    favoriteItemKeys: string[];
  }
): ITradeItem[] =>
  items.filter(
    (item) =>
      !filters.isOnlyShowFavoriteItems ||
      params.favoriteItemKeys.includes(
        getFavoriteItemKey(params.stateCode, item)
      )
  );

const sortTradeItems = (items: ITradeItem[], sort: IItemsSort): ITradeItem[] =>
  items.sort((a, b) => {
    const from = a[sort.column];
    const to = b[sort.column];

    if (sort.direction === "asc") {
      return from > to ? 1 : -1;
    }

    if (sort.direction === "desc") {
      return from > to ? -1 : 1;
    }

    return 0;
  });

const GET_TRADE_ITEMS = gql`
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

const useTradeItems = (): Return => {
  const searchForm = useRecoilValue(searchFormStore);
  const favoriteItemKeys = useRecoilValue(favoriteItemsStore);
  const itemsSort = useRecoilValue(itemsSortStore);
  const itemsFilter = useRecoilValue(itemsFilterStore);

  const { loading, data } = useQuery<{ tradeItems: ITradeItem[] }>(
    GET_TRADE_ITEMS,
    {
      variables: {
        tradeMonth: Number(searchForm.tradeMonth.replace(/-/g, "")),
        stateCode: Number(searchForm.stateCode),
      },
      skip: searchForm.stateCode === "",
    }
  );

  const tradeItems = useMemo(() => {
    if (!data?.tradeItems) {
      return [];
    }

    const reAssignedTradeItems = [...data.tradeItems];
    const filtersTradeItems = filterTradeItems(
      reAssignedTradeItems,
      itemsFilter,
      {
        stateCode: searchForm.stateCode,
        favoriteItemKeys,
      }
    );
    const sortedTradeItems = sortTradeItems(filtersTradeItems, itemsSort);

    return sortedTradeItems;
  }, [data, searchForm.stateCode, favoriteItemKeys, itemsFilter, itemsSort]);

  const tradeAmountAverage = useMemo(() => {
    if (!tradeItems.length) return 0;

    const averageItems = tradeItems.map(
      (item) => item.tradeAmount / item.flastSize
    );

    const averageItemsSummary = averageItems.reduce(
      (averageAmount, item) => averageAmount + item,
      0
    );

    return averageItemsSummary / tradeItems.length || 0;
  }, [tradeItems]);

  return {
    loading,
    tradeItems,
    tradeAmountAverage,
  };
};

export default useTradeItems;
