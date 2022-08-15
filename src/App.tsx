import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import SearchFilterContainer from "./containers/SearchFilterContainer";
import SearchFormContainer from "./containers/SearchFormContainer";
import TableContainer from "./containers/TableContainer";
import "./styles/app.css";

function App() {
  return (
    <RecoilRoot>
      <Layout
        searchForm={<SearchFormContainer />}
        searchFilter={<SearchFilterContainer />}
        table={<TableContainer />}
      />
    </RecoilRoot>
  );
}

export default App;
