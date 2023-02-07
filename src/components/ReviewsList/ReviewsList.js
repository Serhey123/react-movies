import styles from './ReviewsList.module.css';
import { Oval } from 'react-loader-spinner';
import { Alert, AlertTitle } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux/movies';

export default function ReviewsList({ id }) {
  const dispatch = useDispatch();
  const reviews = useSelector(selectors.getCurrentMovieReview);
  const isLoading = useSelector(selectors.getLoader);

  useEffect(() => {
    dispatch(operations.fetchCurrentMovieReview(id));
  }, [id, dispatch]);

  if (reviews.length > 0) {
    return (
      <ul>
        {reviews.map(r => (
          <li key={r.id} className={styles.item}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {r.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {r.content}
                </Typography>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    );
  }

  if (isLoading) {
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

  if (reviews.length === 0) {
    return (
      <Alert severity="error">
        <AlertTitle>Sorry</AlertTitle>
        We dont have reviews for this movie:(
      </Alert>
    );
  }
}
