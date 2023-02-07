import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './movies/movies-reducers';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
