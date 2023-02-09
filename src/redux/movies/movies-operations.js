import { fetchTrending, fetchMovie } from '../../services/fetchService';

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
