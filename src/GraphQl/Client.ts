import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) alert(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
  })
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;
