import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';

import MoviesItems from '../MoviesItems/MoviesItems';
import { fetchTrending } from '../../services/fetchService';
import { Oval } from 'react-loader-spinner';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrending().then(res => {
      setMovies(res.results);
      setLoader(false);
    });
  }, []);

  return (
    <>
      {loader ? (
        <Oval
          height={50}
          width={50}
          color="#000"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          secondaryColor="#f0"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      ) : (
        <div>
          <h2 className={styles.title}>Trending today:</h2>
          {movies && <MoviesItems movies={movies} />}
        </div>
      )}
    </>
  );
}
