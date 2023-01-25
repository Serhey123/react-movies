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
        <>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : 'https://www.chanchao.com.tw/images/default.jpg'
            }
          />
          <p>{movie.title}</p>
        </>
      )}
    </>
  );
}
