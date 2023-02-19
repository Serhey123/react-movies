import { Alert, AlertTitle } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/movies';
import MoviesItems from '../MoviesItems/MoviesItems';
import Title from '../Title/Title';
import { useEffect } from 'react';
import { operations } from 'redux/movies';
import { useDispatch } from 'react-redux';

export default function FavoritePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectors.getFavoriteMoviesList);

  useEffect(() => {
    dispatch(operations.fetchFavoriteMovies());
  }, []);

  return (
    <>
      {movies.length > 0 && (
        <div>
          <Title text={'Your favorites'} />
          <MoviesItems movies={movies} />
        </div>
      )}
      {movies.length === 0 && (
        <Alert severity="info">
          <AlertTitle>There is nothing here yet...</AlertTitle>
          You need to add something.
        </Alert>
      )}
    </>
  );
}
