import { Oval } from 'react-loader-spinner';
import { Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'redux/movies';
import MoviesItems from '../MoviesItems/MoviesItems';
import SearchBar from '../SearchBar/SearchBar';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const movies = useSelector(selectors.getMoviesList);
  const isLoading = useSelector(selectors.getLoader);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  const query = new URLSearchParams(location.search).get('query');

  const onSubmit = q => {
    history.push({ ...location, search: `query=${q}` });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    dispatch(operations.fetchMoviesList(query));
  }, [query, dispatch]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesItems movies={movies} />}
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
          Sorry, nothing found :(
        </Alert>
      )}
    </>
  );
}
