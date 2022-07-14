import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { LOAD_REPOSITORIES } from '../GraphQl/Queries';
import { Repository } from '../types/Repository';
import Loader from './Loader';
import Pagination from './Pagination';

const ListRepositories: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_REPOSITORIES);
  const [repos, setRepos] = useState<Array<Repository>>([]);
  const [total, setTotal] = useState(0);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);

  useEffect(() => {
    if (data) {
      const repos = data.search.edges.map((edge: any) => edge.node);
      setTotal(data.search.repositoryCount);
      setRepos(repos);
    }
  }, [data]);

  if (loading) {
    return <Loader type="processing" />;
  }

  if (error || !data) {
    return <Loader type="error" />;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">A list react related repos</p>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Github ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Owner
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Stars
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {repos.map(repo => (
                    <tr key={repo.id}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{repo.id}</td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{repo.nameWithOwner}</td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{repo.name}</td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{repo.stargazerCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination from={from} to={to} total={total} />
    </div>
  );
};

export default ListRepositories;
