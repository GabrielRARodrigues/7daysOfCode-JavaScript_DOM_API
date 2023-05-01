export default function ({
  createMovieHTMLElement,
  searchMovieFromMoviesAPI,
  checkboxShowFavoriteMovies,
  searchMovieElement,
  movieElementContainer,
  showFavoritedMovies
}) {
  document.addEventListener('keydown', async function (e) {
    const movieName = searchMovieElement.value
    if (e.key === 'Enter' && movieName.length > 0) {
      movieElementContainer.innerHTML = ''
      const movies = await searchMovieFromMoviesAPI(movieName)
      movies.forEach(movie => {
        createMovieHTMLElement(movie)
      })
    }
  })

  checkboxShowFavoriteMovies.addEventListener('click', showFavoritedMovies)
}
