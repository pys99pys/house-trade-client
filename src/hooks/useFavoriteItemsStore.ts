import { useCallback } from "react";
import { useRecoilState } from "recoil";
import favoriteItemsStore, {
  setFavoriteItemToStorage,
  removeFavoriteItemToStorage,
} from "../stores/favoriteItemsStore";

type OnSaveFavoriteItemKeyHandler = (favoriteItemKey: string) => void;

type OnRemoveFavoriteItemHandler = (favoriteItemKey: string) => void;

interface Return {
  favoriteItemKeys: string[];
  onSaveFavoriteItemKey: OnSaveFavoriteItemKeyHandler;
  onRemoveFavoriteItemKey: OnRemoveFavoriteItemHandler;
}

const useFavoriteItemsStore = (): Return => {
  const [favoriteItemKeys, setFavoriteItemKeys] =
    useRecoilState(favoriteItemsStore);

  const onSaveFavoriteItemKey: OnSaveFavoriteItemKeyHandler = useCallback(
    (favoriteItemKey) => {
      const afterFavoriteItems = setFavoriteItemToStorage(favoriteItemKey);
      setFavoriteItemKeys(afterFavoriteItems);
    },
    [setFavoriteItemKeys]
  );

  const onRemoveFavoriteItemKey: OnRemoveFavoriteItemHandler = useCallback(
    (favoriteItemKey) => {
      const afterFavoriteItems = removeFavoriteItemToStorage(favoriteItemKey);
      setFavoriteItemKeys(afterFavoriteItems);
    },
    [setFavoriteItemKeys]
  );

  return {
    favoriteItemKeys,
    onSaveFavoriteItemKey,
    onRemoveFavoriteItemKey,
  };
};

export default useFavoriteItemsStore;
