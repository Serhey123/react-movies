import styles from './MoviesPage.module.css';
import { useState } from 'react';
export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);

    setQuery('');
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        className={styles.input}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
      />
      <button type="submit" className={styles.button}></button>
    </form>
  );
}
