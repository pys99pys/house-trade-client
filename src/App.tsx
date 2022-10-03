import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import SearchFilterContainer from "./containers/SearchFilterContainer";
import SearchFormContainer from "./containers/SearchFormContainer";
import TableContainer from "./containers/TableContainer";
import "./styles/app.css";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://house-trade-server.herokuapp.com/graphql`,
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <Layout
          searchForm={<SearchFormContainer />}
          searchFilter={<SearchFilterContainer />}
          table={<TableContainer />}
        />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
