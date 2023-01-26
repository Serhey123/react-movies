import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrending } from '../../services/fetchService';

export default function HomePage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchTrending().then(res => setFilms(res.results));
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Trending today:</h2>
      {films && (
        <ul className={styles.list}>
          {films.map(film => (
            <li key={film.id} className={styles.list__item}>
              <Link to={`/movies/${film.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                />
                <div className={styles.overlay}>
                  <p className={styles.list__item_title}>
                    {film.title || film.name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
