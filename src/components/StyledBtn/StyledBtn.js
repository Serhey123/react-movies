import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';

export const StyledBtn = styled(LoadingButton)({
  minWidth: '100px',
  borderColor: 'black',
  color: 'black',
  '&:hover': {
    borderColor: 'grey',
    color: 'grey',
    boxShadow: 'none',
  },
});

export const ContainedBtn = styled(LoadingButton)({
  minWidth: '100px',
  backgroundColor: 'black',
  border: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: 'grey',
    border: 'none',
    color: 'white',
    boxShadow: 'none',
  },
});
