import { gql } from '@apollo/client';

export const LOAD_REPOSITORIES = gql(`
query {
    search(query: "is:public stars:>5000 react in:name", type: REPOSITORY, first: 20) {
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      repositoryCount
      edges {
        node {
          ... on Repository {
            nameWithOwner,
            name,
            stargazerCount,
            id
          }
        }
      }
    }
  }
  
`);
