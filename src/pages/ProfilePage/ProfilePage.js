import Avatar from '@mui/material/Avatar';
import { StyledBtn, ContainedBtn } from 'components/StyledBtn/StyledBtn';
import { useSelector } from 'react-redux';
import styles from './ProfilePage.module.css';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import FormInput from 'components/FormInput/FormInput';
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
import DialogModal from 'components/DialogModal/DialogModal';

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

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const img = watch('image');
  const name = watch('name');

  useEffect(() => {
    if (name === user.name && img === null) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
    if (!img) {
      return;
    }
    setSelectedFile(img[0]);
  }, [img, name, user.name]);

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const submit = data => {
    if (data.name === user.name && data.image === null) {
      return;
    }
    dispatch(operations.updateCurrentUser(data));
  };

  const onDiscard = () => {
    setPreview(null);
    reset();
  };

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
          <div className={styles.btn__wrapper}>
            <DialogModal
              btn="Discard"
              disabled={disabled}
              title="Are you sure?"
              text="Changes you made may not be saved."
              agreeFn={onDiscard}
            />
            {isLoading ? (
              <StyledBtn
                variant="outlined"
                startIcon={
                  <Oval
                    height={9}
                    width={10}
                    color="#000"
                    wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
                    secondaryColor="#f0"
                    strokeWidth={8}
                    strokeWidthSecondary={8}
                  />
                }
              />
            ) : (
              <ContainedBtn
                disabled={disabled}
                variant="contained"
                type="submit"
              >
                Save
              </ContainedBtn>
            )}
          </div>
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
