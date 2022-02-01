import { FC } from "react";
import SearchFormContainer from "../containers/SearchFormContainer";
import FavoriteItemsContainer from "../containers/FavoriteItemsContainer";
import TradeItemsTableContainer from "../containers/TradeItemsTableContainer";

const AppLayout: FC = () => {
  return (
    <>
      <header className="h-32 flex justify-center items-center">
        <span className="text-xl font-bold">아파트 실거래가 조회</span>
      </header>
      <main
        className="px-5 container m-auto pb-24 md:px-0"
        style={{ width: "1024px", maxWidth: "100%" }}
      >
        <SearchFormContainer />
        <div className="mt-3">
          <FavoriteItemsContainer />
        </div>
        <div className="mt-6">
          <TradeItemsTableContainer />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
