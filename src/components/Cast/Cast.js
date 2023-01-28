import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/fetchService';

export default function Cast({ id }) {
  const [actors, setActors] = useState(null);
  useEffect(() => {
    fetchMovieCast(id).then(setActors);
  }, []);
  console.log(actors);
  return (
    <>
      {actors && (
        <ul>
          {actors.cast.map(actr => (
            <li key={actr.id}>
              <p>{actr.name}</p>
              <img
                src={
                  actr.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actr.profile_path}`
                    : 'https://www.chanchao.com.tw/images/default.jpg'
                }
              />
              <p>{actr.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
