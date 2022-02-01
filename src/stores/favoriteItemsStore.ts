import { atom } from "recoil";

export const getFavoriteItemKeysInStorage = (): string[] => {
  try {
    const favoriteItemKeys = window.localStorage.getItem("FAVORITE_ITEM_KEYS");
    return favoriteItemKeys ? JSON.parse(favoriteItemKeys) : [];
  } catch {
    return [];
  }
};

export const setFavoriteItemToStorage = (favoriteItemKey: string): string[] => {
  const favoriteItemKeys = getFavoriteItemKeysInStorage();
  const alreadySaved = !!favoriteItemKeys.includes(favoriteItemKey);

  if (alreadySaved) {
    return getFavoriteItemKeysInStorage();
  }

  window.localStorage.setItem(
    "FAVORITE_ITEM_KEYS",
    JSON.stringify(favoriteItemKeys.concat(favoriteItemKey))
  );

  return getFavoriteItemKeysInStorage();
};

export const removeFavoriteItemToStorage = (
  favoriteItemKey: string
): string[] => {
  const favoriteItemKeys = getFavoriteItemKeysInStorage();
  const afterFavoriteItemKeys = favoriteItemKeys.filter(
    (key) => key !== favoriteItemKey
  );

  window.localStorage.setItem(
    "FAVORITE_ITEM_KEYS",
    JSON.stringify(afterFavoriteItemKeys)
  );

  return getFavoriteItemKeysInStorage();
};

const favoriteItemsState = atom<string[]>({
  key: "favoriteItemsState",
  default: getFavoriteItemKeysInStorage(),
});

export default favoriteItemsState;
