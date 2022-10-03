import { atom, useRecoilState } from "recoil";

type OnAddFilterHandler = (code: string) => void;
type OnRemoveFilterHandler = (code: string) => void;

const getStorageData = (): string[] => {
  try {
    const savedData = window.localStorage.getItem("SAVED_CODES");

    return savedData ? JSON.parse(savedData) : [];
  } catch {
    return [];
  }
};

const setStorageData = (code: string): string[] => {
  const savedData = getStorageData();
  const afterData = [...new Set([...savedData, code])];

  window.localStorage.setItem("SAVED_CODES", JSON.stringify(afterData));
  return afterData;
};

const removeStorageData = (code: string): string[] => {
  const savedData = getStorageData();
  const afterData = savedData.filter((item) => item !== code);

  window.localStorage.setItem("SAVED_CODES", JSON.stringify(afterData));
  return afterData;
};

const searchFilterState = atom<string[]>({
  key: "searchFilterState",
  default: getStorageData(),
});

export const useSearchFilterStore = (): {
  searchFilters: string[];
  onAddFilter: OnAddFilterHandler;
  onRemoveFilter: OnRemoveFilterHandler;
} => {
  const [searchFilters, setSearchFilters] = useRecoilState(searchFilterState);

  const onAddFilter: OnAddFilterHandler = (code) => {
    const afterFilter = setStorageData(code);
    setSearchFilters(afterFilter);
  };

  const onRemoveFilter: OnRemoveFilterHandler = (code) => {
    const afterFilter = removeStorageData(code);
    setSearchFilters(afterFilter);
  };

  return {
    searchFilters,
    onAddFilter,
    onRemoveFilter,
  };
};
