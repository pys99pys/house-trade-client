import { useCallback, useState } from "react";

type OnSaveFavoriteItem = (favoriteItemKey: string) => void;
type OnRemoveFavoriteItem = (favoriteItemKey: string) => void;

interface ReturnType {
  favoriteItems: string[];
  onSaveFavoriteItem: OnSaveFavoriteItem;
  onRemoveFavoriteItem: OnRemoveFavoriteItem;
}

const getFavoriteItemKeysInStorage = (): string[] => {
  try {
    const favoriteItemKeys = window.localStorage.getItem("favoriteItemKeys");
    return favoriteItemKeys ? JSON.parse(favoriteItemKeys) : [];
  } catch {
    return [];
  }
};

const setFavoriteItemToStorage = (favoriteItemKey: string): string[] => {
  const favoriteItemKeys = getFavoriteItemKeysInStorage();
  const alreadyAdded = !!favoriteItemKeys.includes(favoriteItemKey);

  if (alreadyAdded) {
    return getFavoriteItemKeysInStorage();
  }

  window.localStorage.setItem(
    "favoriteItemKeys",
    JSON.stringify(favoriteItemKeys.concat(favoriteItemKey))
  );

  return getFavoriteItemKeysInStorage();
};

const removeFavoriteItemToStorage = (favoriteItemKey: string): string[] => {
  const favoriteItemKeys = getFavoriteItemKeysInStorage();
  const afterFavorites = favoriteItemKeys.filter(
    (key) => key !== favoriteItemKey
  );

  window.localStorage.setItem(
    "favoriteItemKeys",
    JSON.stringify(afterFavorites)
  );
  return getFavoriteItemKeysInStorage();
};

export const useFavoriteItems = (): ReturnType => {
  const [favoriteItems, setFavoriteItems] = useState<string[]>(
    getFavoriteItemKeysInStorage()
  );

  const onSaveFavoriteItem: OnSaveFavoriteItem = useCallback(
    (favoriteItemKey) => {
      const afterFavoriteItems = setFavoriteItemToStorage(favoriteItemKey);
      setFavoriteItems(afterFavoriteItems);
    },
    []
  );

  const onRemoveFavoriteItem: OnRemoveFavoriteItem = useCallback(
    (favoriteItemKey) => {
      const afterFavoriteItem = removeFavoriteItemToStorage(favoriteItemKey);
      setFavoriteItems(afterFavoriteItem);
    },
    []
  );

  return {
    favoriteItems,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
  };
};

export default useFavoriteItems;
