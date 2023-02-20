import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null, photo: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  error: { logIn: false, signUp: false, logOut: false },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.displayName;
      state.user.email = action.payload.email;
      state.user.photo = action.payload.photoURL;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = initialState.error;
    },
    [logIn.fulfilled](state, action) {
      state.user.name = action.payload.displayName;
      state.user.email = action.payload.email;
      state.user.photo = action.payload.photoURL;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = initialState.error;
    },
    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = initialState.error;
    },
    [register.pending](state) {
      state.isLoading = true;
      state.error = initialState.error;
    },
    [logIn.pending](state) {
      state.isLoading = true;
      state.error = initialState.error;
    },
    [logOut.pending](state) {
      state.isLoading = true;
      state.error = initialState.error;
    },
    [register.rejected](state) {
      state.isLoading = false;
      state.error.signUp = true;
    },
    [logIn.rejected](state) {
      state.isLoading = false;
      state.error.logIn = true;
    },
    [logOut.rejected](state) {
      state.isLoading = false;
      state.error.logOut = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload?.displayName;
      state.user.email = action.payload?.email;
      state.user.photo = action.payload?.photoUrl;

      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
      state.error = initialState.error;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
    },
    [updateCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload?.displayName;
      state.user.photo = action.payload?.photoURL;
      state.isLoading = false;
      state.error = initialState.error;
    },
    [updateCurrentUser.pending](state) {
      state.isLoading = true;
      state.error = initialState.error;
    },
    [updateCurrentUser.rejected](state) {
      state.isLoading = false;
      state.error.logOut = true;
    },
  },
});

export default authSlice.reducer;
