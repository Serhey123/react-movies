import styles from './MovieDetailsPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import { ContainedBtn, StyledBtn } from '../StyledBtn/StyledBtn.js';
import { imagePicker } from 'utils/imagePicker';
import { Link, useRouteMatch } from 'react-router-dom';
import MovieArticle from '../MovieArticle/MovieArticle';
import MovieArticleList from '../MovieArticleList/MovieArticleList';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'redux/movies';

export default function MovieDetails({ movie, onClick, location }) {
  const { url } = useRouteMatch();

  const movies = useSelector(selectors.getFavoriteMoviesList);
  const dispatch = useDispatch();

  const isInStorage = movies.find(mov => mov.id === movie.id);

  const addHandlerBtn = () => {
    dispatch(actions.addFavoriteMovie(movie));
  };

  const deleteHandlerBtn = () => {
    dispatch(actions.deleteFavoriteMovie(movie));
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
        {isInStorage ? (
          <ContainedBtn
            variant="contained"
            startIcon={<DeleteIcon sx={{ color: 'white' }} />}
            onClick={deleteHandlerBtn}
          >
            Delete
          </ContainedBtn>
        ) : (
          <StyledBtn
            variant="outlined"
            startIcon={<FavoriteIcon />}
            onClick={addHandlerBtn}
          >
            Favorite
          </StyledBtn>
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
          <MovieArticle title={'Overview'} content={movie.overview} />

          <MovieArticle title={'Release date'} content={movie.release_date} />

          <MovieArticleList title={'Genres'} content={movie.genres} />

          <MovieArticleList
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