import APIKey from './ApiKey.js'

export default function ({
  movies,
  createMovieHTMLElement,
  addFavoriteButtonFunction,
  updateMovies,
  favoritedMovies
}) {
  let favoriteButtons
  async function getPopularMoviesFromMoviesAPI() {
    const urlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`
    const requestResponse = await fetch(urlAPI)
    const JSONResponse = await requestResponse.json()
    movies = JSONResponse.results

    thereAreFavoritedMovies()

    updateViewWithMovies()

  
    updateMovies(movies)
  }

  function updateViewWithMovies() {
    movies.forEach(movie => {
      createMovieHTMLElement(movie)
      favoriteButtons = document.querySelectorAll('[data-movie-favorite]')

      addFavoriteButtonFunction(favoriteButtons, movies)
    })
  }

  function thereAreFavoritedMovies() {
    if (favoritedMovies.length > 0) {
      for (const movie of movies) {
        favoritedMovies.forEach(favoritedMovie => {
          let moviesIsEqual = movie.title === favoritedMovie.title
          if (moviesIsEqual) {
            movies[movies.indexOf(movie)] = favoritedMovie
          } else {
            movie.isFavorite = false
          }
        })
      }
    }
  }

  return {
    getPopularMoviesFromMoviesAPI,
    updateViewWithMovies,
    favoriteButtons
  }
}
