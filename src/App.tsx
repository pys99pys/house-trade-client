import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from './layouts/AppLayout';
import MainPage from './pages/MainPage';
import './styles/app.css';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://house-trade-server.herokuapp.com/graphql`,
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
