import ItemCount from "./components/ItemCount";
import ItemTableContainer from "./containers/ItemTableContainer";
import SearchFormContainer from "./containers/SearchFormContainer";
import useData from "./hooks/useData";
import AppLayout from "./layouts/AppLayout";

function App() {
  const { isLoading, tradeItems, onSubmit } = useData();

  return (
    <AppLayout
      searchForm={<SearchFormContainer onSubmit={onSubmit} />}
      itemCount={<ItemCount count={tradeItems.length} />}
      itemTable={
        <ItemTableContainer isLoading={isLoading} items={tradeItems} />
      }
    />
  );
}

export default App;
