import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?";
const apikey = "2dba1a88";

const cacheObj = {};

export const search = (keyword) => {
  const params = [`apikey=${apikey}`, `s=${keyword}`];
  const endPoint = `${apiUrl}${params.join("&")}`;

  if (cacheObj[keyword]) {
    console.log("cached!");
    return new Promise((resolve) => resolve(cacheObj[keyword]));
  }

  return axios.get(endPoint).then((res) => {
    const result = res.data.Search || [];
    cacheObj[keyword] = result;
    return result;
  });
};

export const getMovieByImdbID = (imdbID) => {
  const params = [`apikey=${apikey}`, `i=${imdbID}`];
  const endPoint = `${apiUrl}${params.join("&")}`;

  if (cacheObj[imdbID]) {
    console.log("cached!");
    return new Promise((resolve) => resolve(cacheObj[imdbID]));
  }

  return axios.get(endPoint).then((res) => {
    cacheObj[imdbID] = res.data;
    return res.data;
  });
};

export const fullSearch = (keyword) => {
  return search(keyword).then((res) =>
    Promise.all(res.map((movie) => getMovieByImdbID(movie.imdbID)))
  );
};
