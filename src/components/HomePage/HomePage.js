import { Oval } from 'react-loader-spinner';
import { Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, operations } from 'redux/movies';
import MoviesItems from '../MoviesItems/MoviesItems';
import Title from '../Title/Title';

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
      {isLoading && (
        <Oval
          height={50}
          width={50}
          color="#000"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          secondaryColor="#f0"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong...
        </Alert>
      )}
    </>
  );
}