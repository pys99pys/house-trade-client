import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apollo-client";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <AppLayout />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
