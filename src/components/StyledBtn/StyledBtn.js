import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledBtn = styled(Button)({
  borderColor: 'black',
  color: 'black',
  '&:hover': {
    borderColor: 'grey',
    color: 'grey',
    boxShadow: 'none',
  },
});

export const ContainedBtn = styled(Button)({
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
