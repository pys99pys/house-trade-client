import { Sort } from '../models/TradeItem';

export const getSortWithStorage = (): Sort | null => {
  try {
    const savedData = window.localStorage.getItem('SORT');

    return savedData ? JSON.parse(savedData) : null;
  } catch {
    return null;
  }
};

export const setSortWithStorage = (sort: Sort): Sort => {
  window.localStorage.setItem('SORT', JSON.stringify(sort));

  return sort;
};
