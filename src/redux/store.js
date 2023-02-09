import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { moviesReducer } from './movies/movies-reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'movies',
  storage,
  blacklist: ['moviesList', 'trendingMoviesList', 'isLoading', 'error'],
};

export const store = configureStore({
  reducer: {
    movies: persistReducer(persistConfig, moviesReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
