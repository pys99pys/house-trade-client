import { atom } from "recoil";
import { SearchForm } from "../models/SearchForm";
import landCodes from "../jsons/landCodes.json";

export const searchFormState = atom<SearchForm>({
  key: "searchFormState",
  default: {
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
    cityName: landCodes[0].name,
    code: landCodes[0].children[0].code,
  },
});
