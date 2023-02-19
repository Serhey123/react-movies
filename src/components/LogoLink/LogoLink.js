import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import logo from 'images/logo.png';
import styles from './LogoLink.module.css';

export default function LogoLink(props) {
  return (
    <Box {...props}>
      <NavLink className={styles.logo} exact to="/">
        <img className={styles.logo__img} src={logo} alt="logo" />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <p className={styles.logo__text}>MoviesFolder</p>
        </Box>
      </NavLink>
    </Box>
  );
}
