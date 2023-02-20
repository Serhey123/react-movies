import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  fetchTrendingMovies,
  fetchMoviesList,
  fetchFavoriteMovies,
  addFavoriteMovie,
  deleteFavoriteMovie,
} from './movies-operations';

const moviesList = createReducer([], {
  [fetchMoviesList.fulfilled]: (_, { payload }) => payload,
  [fetchMoviesList.rejected]: () => [],
});

const trendingMoviesList = createReducer([], {
  [fetchTrendingMovies.fulfilled]: (_, { payload }) => payload,
  [fetchTrendingMovies.rejected]: () => [],
});

const favoriteMoviesList = createReducer([], {
  [fetchFavoriteMovies.fulfilled]: (_, { payload }) => payload,
  [fetchFavoriteMovies.rejected]: state => state,
});

const isLoading = createReducer(false, {
  [fetchMoviesList.rejected]: () => false,
  [fetchTrendingMovies.rejected]: () => false,
  [addFavoriteMovie.rejected]: () => false,
  [deleteFavoriteMovie.rejected]: () => false,
  [fetchFavoriteMovies.rejected]: () => false,

  [fetchMoviesList.pending]: () => true,
  [fetchTrendingMovies.pending]: () => true,
  [addFavoriteMovie.pending]: () => true,
  [deleteFavoriteMovie.pending]: () => true,
  [fetchFavoriteMovies.pending]: () => true,

  [fetchMoviesList.fulfilled]: () => false,
  [fetchTrendingMovies.fulfilled]: () => false,
  [addFavoriteMovie.fulfilled]: () => false,
  [deleteFavoriteMovie.fulfilled]: () => false,
  [fetchFavoriteMovies.fulfilled]: () => false,
});

const error = createReducer(false, {
  [fetchMoviesList.rejected]: () => true,
  [fetchTrendingMovies.rejected]: () => true,

  [fetchMoviesList.pending]: () => false,
  [fetchTrendingMovies.pending]: () => false,

  [fetchMoviesList.fulfilled]: () => false,
  [fetchTrendingMovies.fulfilled]: () => false,
});

export const moviesReducer = combineReducers({
  moviesList,
  trendingMoviesList,
  favoriteMoviesList,
  isLoading,
  error,
});
