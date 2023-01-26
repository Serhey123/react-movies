import styles from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/fetchService';
import { Link } from 'react-router-dom';
export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const onSubmit = items => {
    setMovies(items.results);
  };
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
    fetchMovie(query).then(onSubmit);
    setQuery('');
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className={styles['SearchForm-input']}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
      />
      <button type="submit">Search</button>
    </form>
  );
}

function MoviesItems({ movies }) {
  return (
    <>
      {movies && (
        <ul className={styles.list}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.list__item}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : 'https://www.chanchao.com.tw/images/default.jpg'
                  }
                />
                <div className={styles.overlay}>
                  <p className={styles.list__item_title}>
                    {movie.title || movie.name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
