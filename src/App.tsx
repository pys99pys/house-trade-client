import ItemTableContainer from "./containers/ItemTableContainer";
import AppLayout from "./layouts/AppLayout";
import SearchForm from "./components/SearchForm";
import FilterItems from "./components/FilterItems";
import ItemCount from "./components/ItemCount";
import useApp from "./hooks/useApp";

function App() {
  const {
    isLoading,
    searchForm,
    tradeItems,
    filters,
    onChangeDate,
    onChangeCityName,
    onChangeStateCode,
    onCreateFilter,
    onRemoveFilter,
    onFetchWithStateCode,
  } = useApp();

  return (
    <AppLayout
      searchForm={
        <SearchForm
          form={searchForm}
          onSaveFilter={onCreateFilter}
          onChangeDate={onChangeDate}
          onChangeCityName={onChangeCityName}
          onChangeStateCode={onChangeStateCode}
        />
      }
      filterItems={
        <FilterItems
          items={filters}
          onSelect={onFetchWithStateCode}
          onRemove={onRemoveFilter}
        />
      }
      itemCount={<ItemCount count={tradeItems.length} />}
      itemTable={
        <ItemTableContainer isLoading={isLoading} items={tradeItems} />
      }
    />
  );
}

export default App;
