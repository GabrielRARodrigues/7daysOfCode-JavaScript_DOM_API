const movies = [
  {
    title: 'Batman',
    image:
      'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    rating: 9.4,
    year: 2022,
    description:
      'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
    isFavorited: true
  },
  {
    title: 'Avengers Endgame',
    image: './images/movie1.png',
    rating: 9.2,
    year: 2019,
    description:
      'Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.',
    isFavorited: true
  },
  {
    title: 'Avatar',
    image: './images/movie3.png',
    rating: 9.5,
    year: 2009,
    description:
      'Apesar de não ter mais os movimentos da perna, o ex-fuzileiro naval Jake Sully ainda sente que pode ser um guerreiro. Sua intuição começa a se tornar realidade quando ele viaja anos-luz até a estação espacial montada no Planeta Pandora. Habitado por grandes seres azuis, os Na´vi, o local tem uma atmosfera fatal para qualquer terrestre. Por isso, oficiais criaram o programa Avatar, em que um corpo biológico, híbrido de humano e Na´vi, pode ser comandado a distância.',
    isFavorited: true
  }
]
const movieElementContainer = document.querySelector('.movies')

function createMovieHTMLElement({ title, image, rating, year, description }) {
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
        >${rating}</span
      >
      <button
        class="movie-header-status__state movie-header-status__state--favorite"
      >
        Favoritar
      </button>
    </div>
  </div>
  <div class="movie__synopsis">
    <p class="movie-synopsis__text">${description}</p>
  </div>
</div>`
}

movies.forEach(movie => {
  createMovieHTMLElement(movie)
})
