import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth } from 'config/firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const register = createAsyncThunk('auth/register', async data => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const defaultImgRef = ref(storage, 'defaultUser.png');
    const userImg = await getDownloadURL(defaultImgRef);

    await updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: userImg,
    });

    return user;
  } catch (error) {
    throw new Error(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async data => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    return user;
  } catch (error) {
    throw new Error(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async token => {
    try {
      const { data } = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDdlLh_lGAUP_S3U9r0rVDMcsMyQeY2YH4',
        {
          idToken: token,
        },
      );

      return data.users[0];
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const updateCurrentUser = createAsyncThunk(
  'auth/updateCurrentUser',
  async data => {
    try {
      if (!data.image) {
        await updateProfile(auth.currentUser, {
          displayName: data.name,
        });
        return auth.currentUser;
      }
      const fileFolderRef = ref(
        storage,
        `${auth?.currentUser?.uid}/avatar/${data?.image[0]?.name}`,
      );

      await uploadBytes(fileFolderRef, data?.image[0]);

      const userImg = await getDownloadURL(fileFolderRef);

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: userImg,
      });

      return auth.currentUser;
    } catch (error) {
      throw new Error(error);
    }
  },
);
