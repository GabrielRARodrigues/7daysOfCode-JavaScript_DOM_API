export default function ({ favoritedMovies, movieElementContainer, movies }) {
  function createMovieHTMLElement({
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    isFavorite
  }) {
    const image = `https://image.tmdb.org/t/p/original${poster_path}`
    const year = release_date.slice(0, 4)
    movieElementContainer.innerHTML += `      
    <div class="movie">
    <img
    class="movie__image"
    src="${image}"
    alt="Logo do filme ${title} (${year})"
    />
    <div class="movie__header">
    <h3 class="movie__title" data-movie-title>${title} (${year})</h3>
    <div class="movie-header__status">
    <span
    class="movie-header-status__state movie-header-status__state--rating"
    >${vote_average.toFixed(1)}</span
    >
    <button
    data-movie-favorite
    class="movie-header-status__state movie-header-status__state--unfavorite ${
      isFavorite ? 'movie-header-status__state--favorite' : ''
    }"
    >
    Favoritar
    </button>
    </div>
    </div>
    <div class="movie__synopsis">
    <p class="movie-synopsis__text">${overview}</p>
    </div>
    </div>`
  }

  function addFavoriteButtonFunction(buttons, movies) {
    buttons.forEach(button =>
      button.addEventListener('click', function () {
        this.classList.toggle('movie-header-status__state--favorite')

        const movieHeader = this.parentNode.parentNode
        let movieTitle = movieHeader.querySelector('[data-movie-title]')
        const movieTitleText = replaceTitle(movieTitle)

        const movieIndex = movies.findIndex(
          movie => movie.title === movieTitleText
        )
        const favoritedMovie = movies[movieIndex]

        checkIfTheMovieIsFavorite(favoritedMovie, movieTitleText)
      })
    )
  }

  function checkIfTheMovieIsFavorite(favoritedMovie, movieTitle) {
    if (!favoritedMovie.isFavorite) {
      favoritedMovie.isFavorite = true
      favoritedMovies.push(favoritedMovie)
      localStorage.setItem('favoritedMovies', JSON.stringify(favoritedMovies))
    } else {
      favoritedMovie.isFavorite = false
      favoritedMovies.splice(
        favoritedMovies.findIndex(movie => movie.title === movieTitle),
        1
      )
      setLocalStorageItem('favoritedMovies', favoritedMovies)
    }
  }

  function replaceTitle(movieElement) {
    return movieElement.textContent.replace(/\s\(\d\d\d\d\)/g, '')
  }

  function setLocalStorageItem(itemKey, value) {
    localStorage.setItem(itemKey, JSON.stringify(value))
  }

  return {
    createMovieHTMLElement,
    addFavoriteButtonFunction
  }
}
