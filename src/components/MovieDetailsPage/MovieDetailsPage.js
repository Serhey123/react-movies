import {
  useParams,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';

import { useEffect, lazy, Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { Alert, AlertTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StyledBtn from '../StyledBtn/StyledBtn.js';

import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from 'react-redux';

import { operations, selectors } from '../../redux/movies';

const CastList = lazy(() => import('../CastList/CastList.js'));
const ReviewsList = lazy(() => import('../ReviewsList/ReviewsList.js'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

  const movie = useSelector(selectors.getCurrentMovie);
  const isLoading = useSelector(selectors.getLoader);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentMovie(movieId));
  }, [movieId, dispatch]);

  const onClick = () => {
    if (!location.state) {
      history.push('/');
      return;
    }
    history.push(location.state.from);
  };

  return (
    <>
      {error && (
        <>
          <StyledBtn
            variant="outlined"
            onClick={onClick}
            startIcon={<ArrowBackIcon />}
          >
            Go Back
          </StyledBtn>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Not found!!!
          </Alert>
        </>
      )}
      {isLoading && (
        <Oval
          height={50}
          width={50}
          color="#000"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          secondaryColor="#f0"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      )}
      {movie && (
        <>
          <MovieDetails movie={movie} onClick={onClick} location={location} />
          <Suspense
            fallback={
              <Oval
                height={50}
                width={50}
                color="#000"
                wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
                secondaryColor="#f0"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            }
          >
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
