import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import ListRepositories from './Components/ListRepositories';
import { LOAD_REPOSITORIES } from './GraphQl/Queries';

const repoMock = {
  request: {
    query: LOAD_REPOSITORIES,
    variables: {
      after: null
    }
  },
  result: {
    data: {
      'search': {
        'pageInfo': {
          'startCursor': 'Y3Vyc29yOjE=',
          'hasNextPage': true,
          'endCursor': 'Y3Vyc29yOjIw'
        },
        'repositoryCount': 159,
        'edges': [
          {
            'node': {
              __typename: 'Repository',
              'nameWithOwner': 'facebook/react',
              'name': 'react',
              'stargazerCount': 191334,
              'id': 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA=='
            }
          },
          {
            'node': {
              __typename: 'Repository',

              'nameWithOwner': 'typescript-cheatsheets/react',
              'name': 'react',
              'stargazerCount': 34991,
              'id': 'MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM='
            }
          }
        ]
      }
    }
  }
};

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});

it('renders without error', async () => {
  render(
    <MockedProvider mocks={[repoMock]}>
      <ListRepositories />
    </MockedProvider>
  );
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('facebook/react')).toBeInTheDocument();

  // expect()
});
