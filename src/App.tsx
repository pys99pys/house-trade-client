import TradeItemsContainer from "./containers/TradeItemsContainer";
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
      tradeItems={
        <TradeItemsContainer isLoading={isLoading} items={tradeItems} />
      }
    />
  );
}

export default App;
