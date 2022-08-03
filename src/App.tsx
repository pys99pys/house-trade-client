import Layout from "./components/Layout";
import SearchFilterContainer from "./containers/SearchFilterContainer";
import SearchFormContainer from "./containers/SearchFormContainer";
import TableContainer from "./containers/TableContainer";
import "./styles/app.css";

function App() {
  return (
    <Layout
      searchForm={<SearchFormContainer />}
      searchFilter={<SearchFilterContainer />}
      table={<TableContainer />}
    />
  );
}

export default App;
