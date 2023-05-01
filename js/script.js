import {
  checkboxShowFavoriteMovies,
  favoritedMovies,
  movieElementContainer,
  searchMovieElement,
  movies,
  updateMovies
} from './variables.js'

import Utils from './utils.js'
import GetMovies from './getPopularMovies.js'
import Events from './events.js'
import Favoritation from './FavoriteMovies.js'
import { searchMovieFromMoviesAPI } from './searchMovie.js'

const utils = Utils({
  favoritedMovies,
  movieElementContainer,
  movies
})

const getMovies = GetMovies({
  movies,
  updateMovies,
  addFavoriteButtonFunction: utils.addFavoriteButtonFunction,
  createMovieHTMLElement: utils.createMovieHTMLElement,
  favoritedMovies
})

const favorite = Favoritation({
  createMovieHTMLElement: utils.createMovieHTMLElement,
  favoritedMovies,
  getPopularMoviesFromMoviesAPI: getMovies.getPopularMoviesFromMoviesAPI,
  movieElementContainer,
  addFavoriteButtonFunction: utils.addFavoriteButtonFunction
})

getMovies.getPopularMoviesFromMoviesAPI()

Events({
  checkboxShowFavoriteMovies,
  createMovieHTMLElement: utils.createMovieHTMLElement,
  searchMovieFromMoviesAPI,
  searchMovieElement,
  movieElementContainer,
  showFavoritedMovies: favorite.showFavoritedMovies
})
