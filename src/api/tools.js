import axios from 'axios'
import queryString from 'query-string'

const getter = (endpoint, queryParams) => {
  // executing the fetch only if there're no params with undefined values
  if (
    queryParams &&
    Object.values(queryParams).filter((o) => o === undefined).length > 0
  )
    return Promise.reject(new Error('no params'))

  const url = queryString.stringifyUrl({
    url: endpoint,
    query: queryParams,
  })

  return axios.get(url).then((res) => res.data)
}

const poster = (endpoint, body) => {
  const url = queryString.stringifyUrl({
    url: endpoint,
  })

  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data)
}

export { getter, poster }
