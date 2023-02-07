import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  fetchTrendingMovies,
  fetchMoviesList,
  fetchCurrentMovie,
  fetchCurrentMovieCast,
  fetchCurrentMovieReview,
} from './movies-operations';

const moviesList = createReducer([], {
  [fetchMoviesList.fulfilled]: (_, { payload }) => payload,
  [fetchMoviesList.rejected]: () => [],
});

const trendingMoviesList = createReducer([], {
  [fetchTrendingMovies.fulfilled]: (_, { payload }) => payload,
});

const movie = createReducer(null, {
  [fetchCurrentMovie.fulfilled]: (_, { payload }) => payload,
  [fetchCurrentMovie.rejected]: () => null,
});

const cast = createReducer([], {
  [fetchCurrentMovieCast.fulfilled]: (_, { payload }) => payload,
});

const review = createReducer([], {
  [fetchCurrentMovieReview.fulfilled]: (_, { payload }) => payload,
});

const currentMovie = combineReducers({
  movie,
  cast,
  review,
});

const isLoading = createReducer(false, {
  [fetchMoviesList.rejected]: () => false,
  [fetchCurrentMovie.rejected]: () => false,
  [fetchTrendingMovies.rejected]: () => false,

  [fetchMoviesList.pending]: () => true,
  [fetchCurrentMovie.pending]: () => true,
  [fetchTrendingMovies.pending]: () => true,
  [fetchCurrentMovieCast.pending]: () => true,
  [fetchCurrentMovieReview.pending]: () => true,

  [fetchMoviesList.fulfilled]: () => false,
  [fetchCurrentMovie.fulfilled]: () => false,
  [fetchTrendingMovies.fulfilled]: () => false,
  [fetchCurrentMovieCast.fulfilled]: () => false,
  [fetchCurrentMovieReview.fulfilled]: () => false,
});

const error = createReducer(false, {
  [fetchMoviesList.rejected]: () => true,
  [fetchCurrentMovie.rejected]: () => true,
  [fetchTrendingMovies.rejected]: () => true,

  [fetchMoviesList.pending]: () => false,
  [fetchCurrentMovie.pending]: () => false,
  [fetchTrendingMovies.pending]: () => false,

  [fetchMoviesList.fulfilled]: () => false,
  [fetchCurrentMovie.fulfilled]: () => false,
  [fetchTrendingMovies.fulfilled]: () => false,
});

export const moviesReducer = combineReducers({
  moviesList,
  trendingMoviesList,
  currentMovie,
  isLoading,
  error,
});
