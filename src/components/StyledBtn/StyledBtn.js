import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledBtn = styled(Button)({
  marginBottom: '20px',
  borderColor: 'black',
  color: 'black',
  '&:hover': {
    borderColor: 'grey',
    color: 'grey',
    boxShadow: 'none',
  },
});

export default StyledBtn;
