import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectors, operations as authOperations } from 'redux/auth';
import { operations as moviesOperations } from 'redux/movies';
import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper';
import NavigationHeader from './components/NavigationHeader/NavigationHeader';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.js'),
);
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.js'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.js'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage.js'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage.js'));

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectors.getToken);
  const isFetching = useSelector(selectors.getIsFetching);

  useEffect(() => {
    if (token) {
      dispatch(authOperations.fetchCurrentUser(token));
    }
  }, [dispatch, token]);

  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(moviesOperations.fetchFavoriteMovies());
    }
  });

  if (!isFetching) {
    return (
      <ContainerWrapper>
        <NavigationHeader />

        <main className="main">
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>

              <PublicRoute path="/signup" restricted>
                <SignupPage />
              </PublicRoute>

              <PrivateRoute path="/favorite">
                <FavoritePage />
              </PrivateRoute>

              <PrivateRoute path="/profile">
                <ProfilePage />
              </PrivateRoute>

              <PublicRoute path="/movies/:movieId">
                <MovieDetailsPage />
              </PublicRoute>

              <PrivateRoute path="/movies">
                <MoviesPage />
              </PrivateRoute>

              <PublicRoute path="/">
                <HomePage />
              </PublicRoute>
            </Switch>
          </Suspense>
        </main>
      </ContainerWrapper>
    );
  }
}

export default App;
