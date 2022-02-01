import { atom } from "recoil";

export const getFavoriteStateCodesInStorage = (): string[] => {
  try {
    const favoriteStateCodes = window.localStorage.getItem(
      "FAVORITE_STATE_CODES"
    );

    return favoriteStateCodes ? JSON.parse(favoriteStateCodes) : [];
  } catch {
    return [];
  }
};

export const setFavoriteStateCodeToStorage = (stateCode: string): string[] => {
  const favoriteStateCodes = getFavoriteStateCodesInStorage();
  const alreadyAdded = !!favoriteStateCodes.includes(stateCode);

  if (alreadyAdded) {
    return getFavoriteStateCodesInStorage();
  }

  window.localStorage.setItem(
    "FAVORITE_STATE_CODES",
    JSON.stringify(favoriteStateCodes.concat(stateCode))
  );

  return getFavoriteStateCodesInStorage();
};

export const removeFavoriteStateCodeToStorage = (
  favoriteStateCode: string
): string[] => {
  const favoriteStateCodes = getFavoriteStateCodesInStorage();
  const afterFavorites = favoriteStateCodes.filter(
    (key) => key !== favoriteStateCode
  );

  window.localStorage.setItem(
    "FAVORITE_STATE_CODES",
    JSON.stringify(afterFavorites)
  );
  return getFavoriteStateCodesInStorage();
};

const favoriteFiltersState = atom<string[]>({
  key: "favoriteFiltersState",
  default: getFavoriteStateCodesInStorage(),
});

export default favoriteFiltersState;
