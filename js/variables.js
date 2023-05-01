const checkboxShowFavoriteMovies = document.querySelector('#showFavoriteMovies')
const favoritedMovies =
  JSON.parse(localStorage.getItem('favoritedMovies')) || []
const movieElementContainer = document.querySelector('.movies')
const searchMovieElement = document.querySelector('[data-search-movie]')
let movies

function updateMovies(newMovies) {
  movies = newMovies
}

export {
  checkboxShowFavoriteMovies,
  favoritedMovies,
  movieElementContainer,
  searchMovieElement,
  movies,
  updateMovies
}
