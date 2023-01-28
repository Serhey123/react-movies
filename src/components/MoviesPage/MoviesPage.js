import styles from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/fetchService';
import { useHistory, useLocation } from 'react-router-dom';

import MoviesItems from '../MoviesItems/MoviesItems';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [movies, setMovies] = useState(null);

  const query = new URLSearchParams(location.search).get('query');

  const onSubmit = q => {
    history.push({ ...location, search: `query=${q}` });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovie(query).then(res => setMovies(res.results));
  }, [query]);

  console.log(movies);
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <MoviesItems movies={movies} />
    </>
  );
}

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);

    setQuery('');
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        className={styles.input}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
      />
      <button type="submit" className={styles.button}></button>
    </form>
  );
}
