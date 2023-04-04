import APIKey from './js/ApiKey.js'
import { searchMovieFromMoviesAPI } from './js/searchMovie.js'
let movies
let favoriteButtons
const favoritedMovies =
  JSON.parse(localStorage.getItem('favoritedMovies')) || []

const movieElementContainer = document.querySelector('.movies')
const searchMovieElement = document.querySelector('[data-search-movie]')

async function getPopularMoviesFromMoviesAPI() {
  const urlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`
  const requestResponse = await fetch(urlAPI)
  const JSONResponse = await requestResponse.json()
  movies = JSONResponse.results
  movies.forEach(movie => {
    movie.isFavorite = false
    createMovieHTMLElement(movie)
    favoriteButtons = movieElementContainer.querySelectorAll(
      '[data-movie-favorite]'
    )
    addFavoriteButtonFunction(favoriteButtons)
  })
}

export function createMovieHTMLElement({
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
          isFavorite ? '.movie-header-status__state--favorite' : ''
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

function addFavoriteButtonFunction(buttons) {
  buttons.forEach(button =>
    button.addEventListener('click', function () {
      this.classList.toggle('movie-header-status__state--favorite')

      const movieHeader = this.parentNode.parentNode
      console.log(movieHeader)
      const movieTitle = movieHeader
        .querySelector('[data-movie-title]')
        .textContent.replace(/\s\(\d\d\d\d\)/g, '')
      console.log(movieTitle)

      const movieIndex = movies.findIndex(movie => movie.title === movieTitle)
      const favoritedMovie = movies[movieIndex]
      console.log(favoritedMovie)
      if (!favoritedMovie.isFavorite) {
        favoritedMovie.isFavorite = true
        favoritedMovies.push(favoritedMovie)
        localStorage.setItem('favoritedMovies', JSON.stringify(favoritedMovies))
      } else {
        favoritedMovie.isFavorite = false
        favoritedMovies.splice(movieIndex, 1)
        localStorage.setItem('favoritedMovies', JSON.stringify(favoritedMovies))
      }
    })
  )
}

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

getPopularMoviesFromMoviesAPI()
