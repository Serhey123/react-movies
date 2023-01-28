import styles from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieReview } from '../../services/fetchService';

import { RotatingLines } from 'react-loader-spinner';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('pending');
    fetchMovieReview(id).then(res => {
      if (res.results.length === 0) {
        console.log();
        setStatus('error');
        return;
      }
      setReviews(res);
      setStatus('resolved');
    });
  }, []);
  console.log(reviews);
  if (status === 'resolved') {
    return (
      <ul>
        {reviews.results.map(r => (
          <li key={r.id}>
            <p className={styles.title}>{r.author}</p>
            <p className={styles.content}>{r.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  if (status === 'pending') {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    );
  }

  if (status === 'error') {
    return <p>We dont have reviews for this movie:(</p>;
  }
}
