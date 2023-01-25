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
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : 'https://www.chanchao.com.tw/images/default.jpg'
                  }
                />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
