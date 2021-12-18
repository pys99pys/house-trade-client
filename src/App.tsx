import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { getTradeItems } from "./apis/tradeItemApis";
import ItemCount from "./components/ItemCount";
import ItemTableContainer from "./containers/ItemTableContainer";
import SearchFormContainer from "./containers/SearchFormContainer";
import AppLayout from "./layouts/AppLayout";

function App() {
  const [queryParams, setQueryParams] = useState<{
    date: string;
    stateCode: string;
  } | null>(null);

  const { data } = useQuery(
    ["tradneItems", queryParams?.date, queryParams?.stateCode],
    () => getTradeItems(queryParams?.date || "", queryParams?.stateCode || ""),
    {
      enabled: !!queryParams,
      refetchOnWindowFocus: false,
    }
  );

  const onSubmit = useCallback(
    (date: string, stateCode: string) =>
      setQueryParams({
        date,
        stateCode,
      }),
    []
  );

  console.log(data);

  return (
    <AppLayout
      searchForm={<SearchFormContainer onSubmit={onSubmit} />}
      itemCount={<ItemCount count={100} />}
      itemTable={<ItemTableContainer />}
    />
  );
}

export default App;
