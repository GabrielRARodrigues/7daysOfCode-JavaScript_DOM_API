import APIKey from './js/ApiKey.js'

const movieElementContainer = document.querySelector('.movies')
;(async function getPopularMoviesFromMoviesAPI() {
  const urlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`
  const requestResponse = await fetch(urlAPI)
  const JSONResponse = await requestResponse.json()
  const movies = JSONResponse.results
  console.log(movies)
  movies.forEach(movie => {
    createMovieHTMLElement(movie) 
  })
})()

function createMovieHTMLElement({
  title,
  poster_path,
  vote_average,
  release_date,
  overview
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
    <h3 class="movie__title">${title} (${year})</h3>
    <div class="movie-header__status">
      <span
        class="movie-header-status__state movie-header-status__state--rating"
        >${vote_average}</span
      >
      <button
        class="movie-header-status__state movie-header-status__state--favorite"
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
