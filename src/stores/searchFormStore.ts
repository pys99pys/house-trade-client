import { atom } from "recoil";
import { SearchForm } from "../models/SearchForm";

export const searchFormState = atom<SearchForm>({
  key: "searchFormState",
  default: {
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
    cityName: "서울시",
    code: "",
  },
});
