import { atom } from "recoil";

export interface ISearchForm {
  tradeMonth: string;
  cityName: string;
  stateCode: string;
}

const searchFormState = atom<ISearchForm>({
  key: "searchFormState",
  default: {
    tradeMonth: new Date().toISOString().substring(0, 7),
    cityName: "",
    stateCode: "",
  },
});

export default searchFormState;
