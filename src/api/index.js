/* eslint-disable no-unused-vars */
import useSWR from 'swr'
import queryString from 'query-string'

import endPoints from './endPoints'
import { getter } from './tools'

const useGenericFetch = (endpoint, params, xhr = getter) => {
  const swrOptions = {
    revalidateOnFocus: false,
  }
  const queryParams = queryString.stringifyUrl({
    url: endpoint,
    query: params,
  })

  const { data, error } = useSWR(
    queryParams,
    () => xhr(endpoint, params),
    swrOptions
  )

  return { result: data, error }
}

// eslint-disable-next-line import/prefer-default-export
export const useUsers = () =>
  // TODO: use real APIs rather than mocked data
  // useGenericFetch(endPoints.users)

  [
    {
      user: {
        name: 'John',
        id: 'a01',
        age: 35,
      },
    },
  ]
