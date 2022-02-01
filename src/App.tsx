import { RecoilRoot } from "recoil";
import AppLayout from "./layouts/AppLayout";
import SearchForm from "./components/SearchForm";
import FavoriteFilterItems from "./components/FavoriteFilterItems";
import TradeItemsTable from "./components/TradeItemsTable";

function App() {
  return (
    <RecoilRoot>
      <AppLayout
        searchForm={<SearchForm />}
        favoriteFilterItems={<FavoriteFilterItems />}
        tradeItems={<TradeItemsTable />}
      />
    </RecoilRoot>
  );
}

export default App;
