import ProfileMenu from 'components/ProfileMenu/ProfileMenu';
import { StyledBtn } from 'components/StyledBtn/StyledBtn';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';
import styles from './ProfileNav.module.css';
import DialogModal from 'components/DialogModal/DialogModal';

export default function ProfileNav({ isLoggedIn }) {
  const dispatch = useDispatch();
  if (isLoggedIn) {
    return (
      <ProfileMenu>
        <NavLink className={styles.link} to="/profile">
          Profile
        </NavLink>
        <NavLink className={styles.link} to="/favorite">
          Favorite
        </NavLink>
        <DialogModal
          agreeFn={() => dispatch(logOut())}
          btn="Log Out"
          title="Logging Out"
          text="Are you sure you want to log out?"
        />
      </ProfileMenu>
    );
  } else {
    return (
      <NavLink className={styles.link} to="/login">
        <StyledBtn
          sx={{ display: { xs: 'flex', md: 'none' } }}
          variant="outlined"
        >
          Log In
        </StyledBtn>
      </NavLink>
    );
  }
}
