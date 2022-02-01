import { atom } from "recoil";

export interface IItemsFilter {
  isOnlyShowFavoriteItems: boolean;
}

const itemsFilterState = atom<IItemsFilter>({
  key: "itemsFilterState",
  default: {
    isOnlyShowFavoriteItems: false,
  },
});

export default itemsFilterState;
