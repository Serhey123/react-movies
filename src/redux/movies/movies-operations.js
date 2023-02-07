import {
  fetchTrending,
  fetchMovie,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReview,
} from '../../services/fetchService';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async () => {
    const data = await fetchTrending();
    return data;
  },
);

export const fetchMoviesList = createAsyncThunk(
  'movies/fetchMoviesList',
  async query => {
    const data = await fetchMovie(query);
    if (data.length === 0) {
      throw new Error('Error, not found');
    }
    return data;
  },
);

export const fetchCurrentMovie = createAsyncThunk(
  'movies/fetchCurrentMovie',
  async id => {
    const data = await fetchMovieById(id);
    return data;
  },
);

export const fetchCurrentMovieCast = createAsyncThunk(
  'movies/fetchMovieCast',
  async id => {
    const data = await fetchMovieCast(id);
    return data;
  },
);

export const fetchCurrentMovieReview = createAsyncThunk(
  'movies/fetchMovieReview',
  async id => {
    const data = await fetchMovieReview(id);
    return data;
  },
);
