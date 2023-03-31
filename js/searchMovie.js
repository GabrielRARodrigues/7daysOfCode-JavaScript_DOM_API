import apiKey from './ApiKey.js'

export async function searchMovieFromMoviesAPI(movieName) {
  const urlAPI = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
  const requestResponse = await fetch(urlAPI)
  const JSONResponse = await requestResponse.json()
  const searchedMovies = JSONResponse.results
  return searchedMovies;
}
