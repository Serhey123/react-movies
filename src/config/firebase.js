import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDdlLh_lGAUP_S3U9r0rVDMcsMyQeY2YH4',
  authDomain: 'movies-folder-34768.firebaseapp.com',
  projectId: 'movies-folder-34768',
  storageBucket: 'movies-folder-34768.appspot.com',
  messagingSenderId: '998936879703',
  appId: '1:998936879703:web:7cd9a3602ec5b288ceb912',
  measurementId: 'G-3KT9JY4PPG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);
