import {
  useParams,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { fetchMovieById } from 'services/fetchService';
import Loader from 'components/Loader/Loader';
import { Alert, AlertTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledBtn } from 'components/StyledBtn/StyledBtn.js';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import styles from './MovieDetailsPage.module.css';
const CastList = lazy(() => import('components/CastList/CastList.js'));
const ReviewsList = lazy(() => import('components/ReviewsList/ReviewsList.js'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    fetchMovieById(movieId)
      .then(res => {
        setMovie(res);
        setStatus('resolve');
      })
      .catch(err => {
        setStatus('error');
        return;
      });
  }, [movieId]);

  const onClick = () => {
    if (!location.state) {
      history.push('/');
      return;
    }
    history.push(location.state.from);
  };

  return (
    <>
      {status === 'error' && (
        <>
          <div className={styles.links}>
            <StyledBtn
              variant="outlined"
              onClick={onClick}
              startIcon={<ArrowBackIcon />}
            >
              Go Back
            </StyledBtn>
          </div>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Not found!!!
          </Alert>
        </>
      )}
      {status === 'pending' && <Loader />}
      {status === 'resolve' && (
        <>
          <MovieDetails movie={movie} onClick={onClick} location={location} />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/movies/:movieId/cast">
                <CastList id={movieId} />
              </Route>
              <Route path="/movies/:movieId/reviews">
                <ReviewsList id={movieId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
