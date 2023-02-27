import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
export default function btnPropsPicker(
  currentMovieInStorage,
  deleteHandlerBtn,
  addHandlerBtn,
) {
  const startIcon = currentMovieInStorage ? <DeleteIcon /> : <FavoriteIcon />;
  const onClick = currentMovieInStorage ? deleteHandlerBtn : addHandlerBtn;
  const children = currentMovieInStorage ? 'Delete' : 'Favorite';
  return {
    startIcon,
    onClick,
    children,
  };
}
