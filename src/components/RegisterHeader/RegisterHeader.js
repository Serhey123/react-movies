import styles from './RegisterHeader.module.css';
import LockIcon from '@mui/icons-material/Lock';
import ErrorIcon from '@mui/icons-material/Error';

import { useSelector } from 'react-redux';

export default function RegisterHeader({ title, errorMessage, selector }) {
  const error = useSelector(selector);

  return (
    <div className={styles.title_wrapper}>
      {error ? (
        <>
          <ErrorIcon fontSize="large" color="error" />
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.error}>{errorMessage}</p>
        </>
      ) : (
        <>
          <LockIcon fontSize="large" />
          <h2 className={styles.title}>{title}</h2>
        </>
      )}
    </div>
  );
}
