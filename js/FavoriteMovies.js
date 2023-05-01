import { movies } from './variables.js'

export default function ({
  createMovieHTMLElement,
  favoritedMovies,
  getPopularMoviesFromMoviesAPI,
  movieElementContainer,
  addFavoriteButtonFunction
}) {
  function showFavoritedMovies(event) {
    if (event.target.checked) {
      movieElementContainer.innerHTML = ''
      for (const movie of favoritedMovies) {
        createMovieHTMLElement(movie)
        let favoriteButtons = movieElementContainer.querySelectorAll(
          '[data-movie-favorite]'
        )
        console.log(movies)
        addFavoriteButtonFunction(favoriteButtons, movies)
      }
    } else {
      movieElementContainer.innerHTML = ''
      getPopularMoviesFromMoviesAPI()
    }
  }

  return {
    showFavoritedMovies
  }
}
