import { atom } from 'recoil';
import { SearchForm, SearchTarget } from '../models/SearchForm';
import { getStorageData } from '../utils/searchFilter';
import landCodes from '../jsons/landCodes.json';

export const searchFormState = atom<SearchForm>({
  key: 'searchFormState',
  default: {
    year: new Date().getFullYear().toString(),
    month: new Date().getMonth().toString(),
    cityName: landCodes[0].name,
    code: landCodes[0].children[0].code,
  },
});

export const searchTargetState = atom<SearchTarget | null>({
  key: 'searchTargetState',
  default: null,
});

export const searchFiltersState = atom<string[]>({
  key: 'searchFiltersState',
  default: getStorageData(),
});
