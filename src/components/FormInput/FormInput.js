import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const FormInput = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& label.Mui-error': {
    color: 'red',
  },
  '& input:valid + fieldset': {
    borderColor: 'grey',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderColor: 'black',
    borderLeftWidth: 6,
    padding: '4px !important',
  },
  '& div.Mui-error.Mui-focused fieldset': {
    borderColor: 'red',
    borderLeftWidth: 6,
    padding: '4px !important',
  },
});

export default FormInput;
