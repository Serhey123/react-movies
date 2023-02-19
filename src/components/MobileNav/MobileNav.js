import MobileMenu from 'components/MobileMenu/MobileMenu';
import { NavLink } from 'react-router-dom';
import styles from './MobileNav.module.css';

export default function MobileNav({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <MobileMenu>
        <NavLink className={styles.link} exact to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
        <NavLink className={styles.link} to="/favorite">
          Favorite
        </NavLink>
      </MobileMenu>
    );
  } else {
    return (
      <MobileMenu>
        <NavLink className={styles.link} exact to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/login">
          Log In
        </NavLink>
        <NavLink className={styles.link} to="/signup">
          Sign Up
        </NavLink>
      </MobileMenu>
    );
  }
}
