import Loader from 'components/Loader/Loader';
import { Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'redux/movies';
import MoviesItems from 'components/MoviesItems/MoviesItems';
import SearchBar from 'components/SearchBar/SearchBar';

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
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesItems movies={movies} />}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Sorry, nothing found :(
        </Alert>
      )}
    </>
  );
}
