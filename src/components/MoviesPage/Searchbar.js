import styles from './MoviesPage.module.css';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      transition: 'all 0.1s ease',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

export default function Searchbar({ onSubmit }) {
  // const [query, setQuery] = useState('');

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { query: '' },
  });

  // const submitHandler = e => {
  //   e.preventDefault();

  //   e.currentTarget[0].blur();

  //   if (query.trim() === '') {
  //     return;
  //   }

  //   onSubmit(query);

  //   setQuery('');
  // };

  const submit = data => {
    onSubmit(data.query.trim());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <Controller
        name="query"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CssTextField
            {...field}
            label="Search movies"
            type="search"
            size="small"
            autoComplete="off"
            className={styles.input}
            // value={query}
            // onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
          />
        )}
      />
      {errors.query?.type === 'required' && (
        <p role="alert">First name is required</p>
      )}
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
}
