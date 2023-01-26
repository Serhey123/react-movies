import styles from './MovieDetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieById } from '../../services/fetchService';
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
              {movie.title} ({movie.release_date.slice(0, 4)})
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
                <ul className={styles.list}>
                  {movie.production_countries.map(el => (
                    <li key={el.iso_3166_1}>{el.name}</li>
                  ))}
                </ul>
              </>
            )}
            {movie.production_companies.length !== 0 && (
              <>
                <h3 className={styles.title}>Companies</h3>
                <ul className={styles.list}>
                  {movie.production_companies.map(el => (
                    <li key={el.id}>
                      <img
                        className={styles.companies__logo}
                        src={
                          el.logo_path
                            ? `https://image.tmdb.org/t/p/w300${el.logo_path}`
                            : 'https://www.chanchao.com.tw/images/default.jpg'
                        }
                      />
                      {el.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {movie.tagline !== '' && <h2>"{movie.tagline}"</h2>}
          </div>
        </div>
      )}
    </>
  );
}
