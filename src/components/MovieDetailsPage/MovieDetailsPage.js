import {
  useParams,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';

import { useEffect, useState, lazy, Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { Alert, AlertTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StyledBtn from '../StyledBtn/StyledBtn.js';

import { fetchMovieById } from '../../services/fetchService';
import MovieDetails from './MovieDetails';

const CastList = lazy(() => import('../CastList/CastList.js'));
const ReviewsList = lazy(() => import('../ReviewsList/ReviewsList.js'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    fetchMovieById(movieId).then(res => {
      if (res.status_code) {
        setStatus('error');
        return;
      }
      setMovie(res);
      setStatus('resolve');
    });
  }, [movieId]);

  const onClick = () => {
    history.push(location.state.from);
  };

  return (
    <>
      {status === 'error' && (
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
      {status === 'pending' && (
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
      {status === 'resolve' && (
        <MovieDetails movie={movie} onClick={onClick} location={location} />
      )}

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
  );
}
