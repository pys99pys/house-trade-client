import { FC } from "react";
import classNames from "classnames";
import { border } from "../styles/variables";
import { isFavoriteTradeItem } from "../utils/helpers";
import { ITradeItem } from "../hooks/useTradeItems2";
import TradeItemsTableRow from "./TradeItemsTableRow";
import TradeItemsLoading from "./TradeItemsLoading";
import { ISearchForm } from "../stores/searchFormStore";

interface TradeItemsTableBodyProps {
  loading: boolean;
  tradeItems: ITradeItem[];
  searchForm: ISearchForm;
  favoriteItemKeys: string[];
  onSaveFavoriteItem: (tradeItem: ITradeItem) => void;
  onRemoveFavoriteItem: (tradeItem: ITradeItem) => void;
}

const TradeItemsTableBody: FC<TradeItemsTableBodyProps> = ({
  loading,
  tradeItems,
  searchForm,
  favoriteItemKeys,
  onSaveFavoriteItem,
  onRemoveFavoriteItem,
}) => {
  return (
    <>
      {loading && (
        <tr>
          <td
            colSpan={8}
            className={classNames(border, "py-14 bg-gray-50 text-center")}
          >
            <TradeItemsLoading />
          </td>
        </tr>
      )}
      {!loading &&
        tradeItems.map((item, index) => (
          <TradeItemsTableRow
            key={index}
            grayBackground={index % 2 === 0}
            item={item}
            isFavorite={isFavoriteTradeItem(
              favoriteItemKeys,
              searchForm.stateCode,
              item
            )}
            onSaveFavoriteItem={() => onSaveFavoriteItem(item)}
            onRemoveFavoriteItem={() => onRemoveFavoriteItem(item)}
          />
        ))}
    </>
  );
};

export default TradeItemsTableBody;
