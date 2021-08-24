const API_KEY = '7e3f2b63085dc68034c2f39e6a90e8bd';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = () => {
    return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
}

export const getRecommended = () => {
  return fetch (`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
  .then((response) => response.json())
}

export const getTopRated = () => {
  return fetch (`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
  .then((response) => response.json())
}

export const getMovieDetails = (movie) => {
  return fetch (`${BASE_URL}/movie/${movie}?api_key=${API_KEY}`)
  .then((response) => response.json())
}
