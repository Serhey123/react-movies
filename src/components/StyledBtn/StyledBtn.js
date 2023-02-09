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
  color: 'white',
  '&:hover': {
    backgroundColor: 'grey',
    color: 'white',
    boxShadow: 'none',
  },
});
