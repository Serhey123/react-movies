import { fetchTrending, fetchMovie } from '../../services/fetchService';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from 'config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async () => {
    try {
      const data = await fetchTrending();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const fetchMoviesList = createAsyncThunk(
  'movies/fetchMoviesList',
  async query => {
    try {
      const data = await fetchMovie(query);
      if (data.length === 0) {
        throw new Error('Error, not found');
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const addFavoriteMovie = createAsyncThunk(
  'movies/addFavoriteMovie',
  async movie => {
    try {
      const collectionRef = collection(
        db,
        `/favorite-movies/${auth?.currentUser?.uid}/mov`,
      );
      await addDoc(collectionRef, movie);
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const deleteFavoriteMovie = createAsyncThunk(
  'movies/deleteFavoriteMovie',
  async id => {
    try {
      const docRef = doc(
        db,
        `/favorite-movies/${auth?.currentUser?.uid}/mov/${id}`,
      );
      await deleteDoc(docRef);
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const fetchFavoriteMovies = createAsyncThunk(
  'movies/fetchFavoriteMovie',
  async () => {
    try {
      const collectionRef = collection(
        db,
        `/favorite-movies/${auth?.currentUser?.uid}/mov`,
      );
      const data = await getDocs(collectionRef);
      const filterData = data.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id,
        createTime: doc._document.createTime.timestamp.seconds,
      }));
      const sortedData = filterData.sort((a, b) => b.createTime - a.createTime);

      return sortedData;
    } catch (error) {
      throw new Error(error);
    }
  },
);
