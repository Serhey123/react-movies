import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/fetchService';
import { useHistory, useLocation } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

import MoviesItems from '../MoviesItems/MoviesItems';
import Searchbar from './Searchbar';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');

  const query = new URLSearchParams(location.search).get('query');

  const onSubmit = q => {
    history.push({ ...location, search: `query=${q}` });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');
    fetchMovie(query).then(res => {
      if (res.results.length === 0) {
        setStatus('error');
        return;
      }
      setStatus('resolved');
      setMovies(res.results);
    });
  }, [query]);

  console.log(movies);
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {status === 'resolved' && <MoviesItems movies={movies} />}
      {status === 'pending' && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      )}
      {status === 'error' && <p>Sorry, nothing found :(</p>}
    </>
  );
}
