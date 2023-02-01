import styles from './MovieDetailsPage.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StyledBtn from '../StyledBtn/StyledBtn.js';

import { imagePicker } from '../../utils/imagePicker';
import MovieArticle from '../MovieArticle/MovieArticle';

export default function MovieDetails({ movie, onClick, location }) {
  const { url } = useRouteMatch();

  return (
    <>
      <StyledBtn
        variant="outlined"
        onClick={onClick}
        startIcon={<ArrowBackIcon />}
      >
        Go Back
      </StyledBtn>

      <div className={styles.section}>
        <div>
          <img src={imagePicker(movie.poster_path)} />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.name}>
            {`${movie.title} ${
              movie.release_date && `(${movie.release_date.slice(0, 4)})`
            }
            `}
          </h1>

          <MovieArticle title={'Overview'} content={movie.overview} />

          <MovieArticle title={'Release date'} content={movie.release_date} />

          <MovieArticle title={'Genres'} content={movie.genres} />

          <MovieArticle
            title={'Countries'}
            content={movie.production_countries}
          />

          {movie.tagline && <h2>"{movie.tagline}"</h2>}
        </div>
      </div>

      <div className={styles.links}>
        <Link
          className={styles.link}
          to={{ pathname: `${url}/cast`, state: location.state }}
        >
          <StyledBtn variant="outlined">Cast</StyledBtn>
        </Link>

        <Link
          className={styles.link}
          to={{ pathname: `${url}/reviews`, state: location.state }}
        >
          <StyledBtn variant="outlined">Reviews</StyledBtn>
        </Link>
      </div>
    </>
  );
}
