import Loader from 'components/Loader/Loader';
import { Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, operations } from 'redux/movies';
import MoviesItems from 'components/MoviesItems/MoviesItems';
import Title from 'components/Title/Title';

export default function HomePage() {
  const movies = useSelector(selectors.getTrendingMoviesList);
  const isLoading = useSelector(selectors.getLoader);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchTrendingMovies());
  }, [dispatch]);

  return (
    <>
      {movies.length > 0 && (
        <div>
          <Title text={'Trending today'} />
          <MoviesItems movies={movies} />
        </div>
      )}
      {isLoading && <Loader />}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong...
        </Alert>
      )}
    </>
  );
}
