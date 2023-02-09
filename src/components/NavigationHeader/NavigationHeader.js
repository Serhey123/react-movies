import styles from './NavigationHeader.module.css';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo.png';

export default function NavigationHeader() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.logo} exact to="/">
        <img className={styles.logo__img} src={logo} alt="logo" />
        <p className={styles.logo__text}>MoviesFolder</p>
      </NavLink>
      <div className={styles.nav__wrapper}>
        <NavLink className={styles.link} exact to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
        <NavLink className={styles.link} to="/favorite">
          Favorite
        </NavLink>
      </div>
    </nav>
  );
}
