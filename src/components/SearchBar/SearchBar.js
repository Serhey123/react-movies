import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';

export default function Searchbar({ onSubmit }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { query: '' },
  });

  const submit = data => {
    if (data.query.trim() === '') {
      return;
    }
    onSubmit(data.query.trim());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <Controller
        name="query"
        control={control}
        rules={{ required: 'This is required field!!!' }}
        render={({ field }) => (
          <FormInput
            {...field}
            label="Search movies"
            type="search"
            size="small"
            autoComplete="off"
            className={styles.input}
            error={!!errors.query}
            helperText={errors?.query?.message}
          />
        )}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
}
