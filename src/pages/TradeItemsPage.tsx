import { FC } from "react";
import SearchFormContainer from "../containers/SearchFormContainer";
import SearchFilterContainer from "../containers/SearchFilterContainer";
import TradeTableContainer from "../containers/TradeTableContainer";
import css from "./TradeItemsPage.module.css";

interface TradeItemsPageProps {}

const TradeItemsPage: FC<TradeItemsPageProps> = () => {
  return (
    <div className={css.tradeItemsPage}>
      <SearchFormContainer />
      <div className={css.searchFilterWrap}>
        <SearchFilterContainer />
      </div>
      <div className={css.tableWrap}>
        <TradeTableContainer />
      </div>
    </div>
  );
};

export default TradeItemsPage;
