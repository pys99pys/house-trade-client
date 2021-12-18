import ItemCount from "./components/ItemCount";
import ItemTableContainer from "./containers/ItemTableContainer";
import SearchFormContainer from "./containers/SearchFormContainer";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout
      searchForm={<SearchFormContainer />}
      itemCount={<ItemCount count={100} />}
      itemTable={<ItemTableContainer />}
    />
  );
}

export default App;
