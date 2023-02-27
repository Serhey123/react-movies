import { Alert, AlertTitle } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/movies';
import MoviesItems from '../../components/MoviesItems/MoviesItems';
import Title from '../../components/Title/Title';
import { useEffect } from 'react';
import { operations } from 'redux/movies';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';

export default function FavoritePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectors.getFavoriteMoviesList);
  const isLoading = useSelector(selectors.getLoader);

  useEffect(() => {
    dispatch(operations.fetchFavoriteMovies());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : movies.length === 0 ? (
        <Alert severity="info">
          <AlertTitle>There is nothing here yet...</AlertTitle>
          You need to add something.
        </Alert>
      ) : (
        <div>
          <Title text={'Your favorites'} />
          <MoviesItems movies={movies} />
        </div>
      )}
    </>
  );
}
