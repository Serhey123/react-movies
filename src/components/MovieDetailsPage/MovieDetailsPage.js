import {
  useParams,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { fetchMovieById } from '../../services/fetchService';
import MovieDetails from './MovieDetails';

const Cast = lazy(() => import('../Cast/Cast.js'));
const Reviews = lazy(() => import('../Reviews/Reviews.js'));

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
      {status === 'error' && <p>Not found!!!</p>}
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
            <Cast id={movieId} />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews id={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
