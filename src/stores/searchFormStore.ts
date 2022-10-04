import { Dispatch, SetStateAction } from "react";
import { atom, SetterOrUpdater, useRecoilState } from "recoil";
import { SearchForm } from "../models/SearchForm";
import landCodes from "../jsons/landCodes.json";

const searchFormState = atom<SearchForm>({
  key: "searchFormState",
  default: {
    year: new Date().getFullYear().toString(),
    month: new Date().getMonth().toString(),
    cityName: landCodes[0].name,
    code: landCodes[0].children[0].code,
  },
});

const isSearchedState = atom<boolean>({
  key: "isSearchedState",
  default: false,
});

export const useSearchFormStore = (): {
  isSearched: boolean;
  searchForm: SearchForm;
  setIsSearched: Dispatch<SetStateAction<boolean>>;
  setSearchForm: SetterOrUpdater<SearchForm>;
} => {
  const [isSearched, setIsSearched] = useRecoilState(isSearchedState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  return {
    isSearched,
    searchForm,
    setIsSearched,
    setSearchForm,
  };
};
