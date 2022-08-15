import { atom } from "recoil";

export const searchFilterState = atom<string[]>({
  key: "searchFilterState",
  default: ["11680"],
});
