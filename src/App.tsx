import { ApolloProvider } from '@apollo/client';
import './App.css';
import Main from './Components/layout/Main';
import ListRepositories from './Components/ListRepositories';
import client from './GraphQl/Client';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <ListRepositories></ListRepositories> */}
      <Main></Main>
    </ApolloProvider>
  );
}

export default App;
