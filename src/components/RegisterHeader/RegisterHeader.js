import styles from './RegisterHeader.module.css';
import LockIcon from '@mui/icons-material/Lock';
import ErrorIcon from '@mui/icons-material/Error';
import { Oval } from 'react-loader-spinner';
import { selectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function RegisterHeader({ title, errorMessage, selector }) {
  const error = useSelector(selector);
  const isLoading = useSelector(selectors.getLoader);

  return (
    <div className={styles.title_wrapper}>
      {isLoading ? (
        <>
          <Oval
            height={16}
            width={16}
            color="#000"
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
            secondaryColor="#f0"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
          <h2 className={styles.title}>{title}</h2>
        </>
      ) : error ? (
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
