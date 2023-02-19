import styles from './NavigationHeader.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import MobileNav from 'components/MobileNav/MobileNav';
import ProfileNav from 'components/ProfileNav/ProfileNav';
import LogoLink from 'components/LogoLink/LogoLink';
import DesctopNav from 'components/DesktopNav/DesktopNav';

export default function NavigationHeader() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <MobileNav isLoggedIn={isLoggedIn} />

      <LogoLink sx={{ flexGrow: 1, display: 'flex' }} />

      <DesctopNav
        sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' } }}
        isLoggedIn={isLoggedIn}
      />

      <ProfileNav isLoggedIn={isLoggedIn} />
    </nav>
  );
}
