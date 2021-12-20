import ItemsTableContainer from "./containers/ItemsTableContainer";
import AppLayout from "./layouts/AppLayout";
import SearchForm from "./components/SearchForm";
import FavoriteFilterItems from "./components/FavoriteFilterItems";
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
    onRemoveFavoriteFilter,
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
      favoriteFilterItems={
        <FavoriteFilterItems
          items={filters}
          onSelect={onFetchWithStateCode}
          onRemove={onRemoveFavoriteFilter}
        />
      }
      itemsTable={
        <ItemsTableContainer isLoading={isLoading} items={tradeItems} />
      }
    />
  );
}

export default App;
