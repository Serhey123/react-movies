import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';

import MoviesItems from '../MoviesItems/MoviesItems';
import { fetchTrending } from '../../services/fetchService';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Trending today:</h2>
      {movies && <MoviesItems movies={movies} />}
    </div>
  );
}
