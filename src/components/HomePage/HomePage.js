import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'b8e8b8dadac797da0595c7d7e1af61f4';

export default function HomePage() {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
      .then(res => res.json())
      .then(res => setFilms(res.results));
  }, []);
  return (
    <>
      {films && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                />
                <p>{film.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
