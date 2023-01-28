import styles from './MovieDetailsPage.module.css';
import { Link } from 'react-router-dom';

export default function MovieDetails({ movie, movieId }) {
  return (
    <>
      <div className={styles.section}>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : 'https://www.chanchao.com.tw/images/default.jpg'
            }
          />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.name}>
            {movie.title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h1>
          <h3 className={styles.title}>Overview</h3>
          <p className={styles.info}>{movie.overview}</p>
          <h4 className={styles.title}>Release date: {movie.release_date}</h4>
          {movie.genres.length !== 0 && (
            <>
              <h3 className={styles.title}>Genres</h3>
              <ul>
                {movie.genres.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
            </>
          )}

          {movie.production_countries.length !== 0 && (
            <>
              <h3 className={styles.title}>Countries</h3>
              <ul>
                {movie.production_countries.map(el => (
                  <li key={el.iso_3166_1}>{el.name}</li>
                ))}
              </ul>
            </>
          )}
          {movie.tagline && <h2>"{movie.tagline}"</h2>}
        </div>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to={`/movies/${movieId}/cast`}>
          Cast
        </Link>
        <Link className={styles.link} to={`/movies/${movieId}/reviews`}>
          Reviews
        </Link>
      </div>
    </>
  );
}
