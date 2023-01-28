import styles from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieReview } from '../../services/fetchService';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieReview(id).then(setReviews);
  }, []);
  //   console.log(reviews.results);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.results.map(r => (
            <li key={r.id}>
              <p>{r.author}</p>

              <p>{r.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
