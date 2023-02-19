import Avatar from '@mui/material/Avatar';
import { StyledBtn, ContainedBtn } from 'components/StyledBtn/StyledBtn';
import { useSelector } from 'react-redux';
import styles from './ProfilePage.module.css';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import FormInput from '../FormInput/FormInput';
import { useForm, Controller } from 'react-hook-form';
import { operations, selectors as authSelectors } from 'redux/auth';
import { selectors as movieSelectors } from 'redux/movies';
import { useDispatch } from 'react-redux';
import Title from 'components/Title/Title';
import EditIcon from '@mui/icons-material/Edit';
import MovieArticle from 'components/MovieArticle/MovieArticle';
import Paper from '@mui/material/Paper';
import { Oval } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  image: Joi.any(),
}).required();

export default function ProfilePage() {
  const user = useSelector(authSelectors.getUser);
  const isLoading = useSelector(authSelectors.getLoader);
  const favoriteMovies = useSelector(movieSelectors.getFavoriteMoviesList);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    register,
    watch,
  } = useForm({
    defaultValues: { name: user.name, image: null },
    resolver: joiResolver(schema),
  });
  const submit = data => {
    if (
      (data.name === '' && data.image === null) ||
      (data.name === user.name && data.image === null)
    ) {
      return;
    }
    console.log(data);
    dispatch(operations.updateCurrentUser(data));
    reset();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const img = watch('image');

  useEffect(() => {
    if (!img) {
      return;
    }

    setSelectedFile(img[0]);
  }, [img]);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <Title text="Your Profile" />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
          {preview && <p className={styles.preview}>Image preview</p>}
          <Avatar
            alt={user.name}
            src={preview || user.photo}
            className={styles.avatar}
          />

          <ContainedBtn
            startIcon={<EditIcon />}
            variant="outlined"
            component="label"
            className={styles.edit__btn}
          >
            Edit
            <input
              {...register('image')}
              name="image"
              hidden
              accept="image/*"
              type="file"
            />
          </ContainedBtn>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Name*"
                type="text"
                size="small"
                autoComplete="off"
                className={styles.input}
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
            )}
          />
          {isLoading ? (
            <StyledBtn
              variant="outlined"
              startIcon={
                <Oval
                  height={16}
                  width={16}
                  color="#000"
                  wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
                  secondaryColor="#f0"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              }
            />
          ) : (
            <ContainedBtn variant="contained" type="submit">
              Save
            </ContainedBtn>
          )}
        </form>
        <Paper className={styles.info}>
          <MovieArticle title="User name" content={user.name} />
          <MovieArticle title="Public e-mail" content={user.email} />
          {favoriteMovies.length > 0 && (
            <p>Favorite movies: {favoriteMovies.length}</p>
          )}
        </Paper>
      </div>
    </>
  );
}
