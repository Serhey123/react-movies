import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </>
  );
}
