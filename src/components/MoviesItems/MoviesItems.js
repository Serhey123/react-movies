import styles from './MoviesItems.module.css';

import { Link } from 'react-router-dom';

export default function MoviesItems({ movies }) {
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
