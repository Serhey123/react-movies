import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { fetchTrendingMovies, fetchMoviesList } from './movies-operations';

import { addFavoriteMovie, deleteFavoriteMovie } from './movies-actions';

const moviesList = createReducer([], {
  [fetchMoviesList.fulfilled]: (_, { payload }) => payload,
  [fetchMoviesList.rejected]: () => [],
});

const trendingMoviesList = createReducer([], {
  [fetchTrendingMovies.fulfilled]: (_, { payload }) => payload,
  [fetchTrendingMovies.rejected]: () => [],
});

const favoriteMoviesList = createReducer([], {
  [addFavoriteMovie.type]: (state, { payload }) => [payload, ...state],
  [deleteFavoriteMovie.type]: (state, { payload }) =>
    state.filter(el => el.id !== payload.id),
});

const isLoading = createReducer(false, {
  [fetchMoviesList.rejected]: () => false,
  [fetchTrendingMovies.rejected]: () => false,

  [fetchMoviesList.pending]: () => true,
  [fetchTrendingMovies.pending]: () => true,

  [fetchMoviesList.fulfilled]: () => false,
  [fetchTrendingMovies.fulfilled]: () => false,
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
