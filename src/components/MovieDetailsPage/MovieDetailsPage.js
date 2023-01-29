import { useParams, Switch, Route } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';

import { RotatingLines } from 'react-loader-spinner';

import { fetchMovieById } from '../../services/fetchService';
import MovieDetails from './MovieDetails';

const Cast = lazy(() => import('../Cast/Cast.js'));
const Reviews = lazy(() => import('../Reviews/Reviews.js'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();

  console.log(movie);

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

  return (
    <>
      {status === 'error' && <p>Not found!!!</p>}
      {status === 'pending' && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      )}
      {status === 'resolve' && <MovieDetails movie={movie} movieId={movieId} />}

      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
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
