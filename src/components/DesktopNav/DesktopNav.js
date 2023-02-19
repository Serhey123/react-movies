import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import styles from './DesktopNav.module.css';

export default function DesctopNav({ isLoggedIn, ...restProps }) {
  return (
    <Box {...restProps}>
      <div className={styles.nav__wrapper}>
        <NavLink className={styles.link} exact to="/">
          Home
        </NavLink>
        {isLoggedIn ? <MoviesNav /> : <AuthNav />}
      </div>
    </Box>
  );
}

function MoviesNav() {
  return (
    <>
      <NavLink className={styles.link} to="/movies">
        Movies
      </NavLink>
      <NavLink className={styles.link} to="/favorite">
        Favorite
      </NavLink>
    </>
  );
}

function AuthNav() {
  return (
    <>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={styles.link} to="/signup">
        Sign Up
      </NavLink>
    </>
  );
}
