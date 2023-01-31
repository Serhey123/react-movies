import styles from './Cast.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/fetchService';

import { Oval } from 'react-loader-spinner';

export default function Cast({ id }) {
  const [actors, setActors] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('pending');
    fetchMovieCast(id).then(res => {
      if (res.cast.length === 0) {
        setStatus('error');
        return;
      }
      setActors(res);
      setStatus('resolved');
    });
  }, []);

  if (status === 'resolved') {
    return (
      <>
        <ul className={styles.list}>
          {actors.cast.map(actr => (
            <li key={actr.id} className={styles.list__item}>
              <img
                className={styles.img}
                src={
                  actr.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actr.profile_path}`
                    : 'https://www.chanchao.com.tw/images/default.jpg'
                }
              />
              <div>
                <p>{actr.name}</p>
                {actr.character && <p>({actr.character})</p>}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <Oval
        height={50}
        width={50}
        color="#000"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        secondaryColor="#f0"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    );
  }

  if (status === 'error') {
    return <p>Not found:(</p>;
  }
}
