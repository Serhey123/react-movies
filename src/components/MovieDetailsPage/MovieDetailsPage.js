import styles from './MovieDetailsPage.module.css';
import { useParams, Link, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieById } from '../../services/fetchService';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  console.log(movie);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
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
              <h4 className={styles.title}>
                Release date: {movie.release_date}
              </h4>
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
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </>
      )}
      <Switch>
        <Route path="/movies/:movieId/cast">
          <Cast id={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews id={movieId} />
        </Route>
      </Switch>
    </>
  );
}
