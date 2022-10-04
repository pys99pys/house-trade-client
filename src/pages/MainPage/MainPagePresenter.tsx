import { FC } from "react";
import SearchForm from "../../components/SearchForm";
import SearchFilter from "../../components/SearchFilter";
import TradeTable from "../../components/TradeTable";
import css from "./MainPage.module.css";

interface MainPagePresenterProps {}

const MainPagePresenter: FC<MainPagePresenterProps> = () => {
  return (
    <div className={css.mainPage}>
      <SearchForm />
      <div className={css.searchFilterWrap}>
        <SearchFilter />
      </div>
      <div className={css.tableWrap}>
        <TradeTable />
      </div>
    </div>
  );
};

export default MainPagePresenter;
