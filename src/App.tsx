import { ApolloProvider } from '@apollo/client';
import './App.css';
import ListRepositories from './Components/ListRepositories';
import client from './GraphQl/Client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ListRepositories></ListRepositories>
    </ApolloProvider>
  );
}

export default App;
