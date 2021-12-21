import { useCallback, useState } from "react";
import { FavoriteItem } from "../models/favoriteItemsModel";

type OnSaveFavoriteItem = (item: Omit<FavoriteItem, "id">) => void;
type OnRemoveFavoriteItem = (id: number) => void;

interface ReturnType {
  favoriteItems: FavoriteItem[];
  onSaveFavoriteItem: OnSaveFavoriteItem;
  onRemoveFavoriteItem: OnRemoveFavoriteItem;
}

const getFavoriteItemInStorage = (): FavoriteItem[] => {
  try {
    const favorites = window.localStorage.getItem("favoriteItems");
    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
};

const setFavoriteItemToStorage = (item: FavoriteItem): FavoriteItem[] => {
  const favorites = getFavoriteItemInStorage();
  const alreadyAdded = !!favorites.find(
    (favoriteItem) =>
      favoriteItem.stateCode === item.stateCode &&
      favoriteItem.apartName === item.apartName &&
      favoriteItem.address === item.address
  );

  if (alreadyAdded) {
    return getFavoriteItemInStorage();
  }

  favorites.push(item);
  window.localStorage.setItem("favoriteItems", JSON.stringify(favorites));

  return getFavoriteItemInStorage();
};

const removeFavoriteItemToStorage = (id: number): FavoriteItem[] => {
  const favorites = getFavoriteItemInStorage();
  const afterFavorites = favorites.filter(
    (favoriteItem) => favoriteItem.id !== id
  );

  window.localStorage.setItem("favoriteItems", JSON.stringify(afterFavorites));
  return getFavoriteItemInStorage();
};

export const useFavoriteItems = (): ReturnType => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>(
    getFavoriteItemInStorage()
  );

  const onSaveFavoriteItem: OnSaveFavoriteItem = useCallback((item) => {
    const afterFavoriteItems = setFavoriteItemToStorage({
      id: +new Date(),
      ...item,
    });
    setFavoriteItems(afterFavoriteItems);
  }, []);

  const onRemoveFavoriteItem: OnRemoveFavoriteItem = useCallback((id) => {
    const afterFavoriteItem = removeFavoriteItemToStorage(id);
    setFavoriteItems(afterFavoriteItem);
  }, []);

  return {
    favoriteItems,
    onSaveFavoriteItem,
    onRemoveFavoriteItem,
  };
};

export default useFavoriteItems;
