import { gql } from '@apollo/client';

export const LOAD_REPOSITORIES = gql(
  `
query($after: String, $before: String, $first: Int = 20, $last: Int) {
    search(query: "is:public stars:>5000 react in:name", type: REPOSITORY, after: $after, before: $before first: $first, last : $last) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
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
  
`
);
