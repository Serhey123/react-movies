import styles from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieReview } from '../../services/fetchService';

import { Oval } from 'react-loader-spinner';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('pending');
    fetchMovieReview(id).then(res => {
      if (res.results.length === 0) {
        setStatus('error');
        return;
      }
      setReviews(res);
      setStatus('resolved');
    });
  }, []);

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

  if (status === 'error') {
    return <p>We dont have reviews for this movie:(</p>;
  }
}
