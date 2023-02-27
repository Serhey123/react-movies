import styles from './ReviewsList.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieReview } from '../../services/fetchService';
import Loader from 'components/Loader/Loader';
import { Alert, AlertTitle } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ReviewsList({ id }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchMovieReview(id).then(res => {
      if (res.length === 0) {
        setStatus('error');
        return;
      }
      setReviews(res);
      setStatus('resolved');
    });
  }, [id]);

  if (status === 'resolved') {
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

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'error') {
    return (
      <Alert severity="error">
        <AlertTitle>Sorry</AlertTitle>
        We dont have reviews for this movie:(
      </Alert>
    );
  }
}
