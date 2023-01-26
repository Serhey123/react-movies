import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.logo} exact to="/">
        <img
          className={styles.logo__img}
          src="https://img.icons8.com/quill/512/experimental-movies-folder-quill.png"
          alt="logo"
        />
        <p>MoviesFolder</p>
      </NavLink>
      <div className={styles.nav__wrapper}>
        <NavLink className={styles.link} exact to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
