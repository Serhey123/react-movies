import styles from './MovieDetails.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import { StyledBtn } from 'components/StyledBtn/StyledBtn.js';
import { imagePicker } from 'utils/imagePicker';
import { Link, useRouteMatch } from 'react-router-dom';
import MovieArticle from 'components/MovieArticle/MovieArticle';
import MovieArticleList from 'components/MovieArticleList/MovieArticleList';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors as movieSelectors } from 'redux/movies';
import { selectors as authSelectors } from 'redux/auth';
import btnPropsPicker from 'utils/btnPropsPicker';

export default function MovieDetails({ movie, onClick, location }) {
  const { url } = useRouteMatch();
  const isLoading = useSelector(movieSelectors.getLoader);
  const movies = useSelector(movieSelectors.getFavoriteMoviesList);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const currentMovieInStorage = movies.find(mov => mov.id === movie.id);

  const dispatch = useDispatch();

  const addHandlerBtn = () => {
    dispatch(operations.addFavoriteMovie(movie));
    dispatch(operations.fetchFavoriteMovies());
  };

  const deleteHandlerBtn = () => {
    dispatch(operations.deleteFavoriteMovie(currentMovieInStorage.docId));
    dispatch(operations.fetchFavoriteMovies());
  };

  return (
    <>
      <div className={styles.links} style={{ width: 'auto' }}>
        <StyledBtn
          variant="outlined"
          onClick={onClick}
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </StyledBtn>
        {isLoggedIn && (
          <StyledBtn
            variant="outlined"
            {...btnPropsPicker(
              currentMovieInStorage,
              deleteHandlerBtn,
              addHandlerBtn,
            )}
            loading={isLoading}
            loadingPosition="start"
          />
        )}
      </div>

      <div className={styles.section}>
        <div>
          <img
            src={imagePicker(movie.poster_path)}
            alt={movie.title}
            className={styles.img}
          />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.name}>
            {`${movie.title} ${
              movie.release_date && `(${movie.release_date.slice(0, 4)})`
            }
            `}
          </h1>
          {!!movie.vote_average && movie.vote_average && (
            <div className={styles.rating}>
              <p>User Score:</p>
              <Rating
                readOnly
                defaultValue={movie.vote_average}
                max={10}
                precision={0.5}
              />
            </div>
          )}
          <MovieArticle title="Overview" content={movie.overview} />
          <MovieArticle title="Release date" content={movie.release_date} />
          <MovieArticleList title="Genres" content={movie.genres} />
          <MovieArticleList
            title="Countries"
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
