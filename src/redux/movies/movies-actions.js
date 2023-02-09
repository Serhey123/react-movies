import { createAction } from '@reduxjs/toolkit';

export const addFavoriteMovie = createAction('movies/addFavoriteMovie');
export const deleteFavoriteMovie = createAction('movies/deleteFavoriteMovie');
