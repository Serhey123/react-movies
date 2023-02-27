import styles from './SignupPage.module.css';
import FormInput from 'components/FormInput/FormInput';
import { ContainedBtn } from 'components/StyledBtn/StyledBtn';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { joiResolver } from '@hookform/resolvers/joi';
import RegisterHeader from 'components/RegisterHeader/RegisterHeader';
import { selectors } from 'redux/auth';
import schema from 'schemas/signUpSchema';

export default function SignupPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoader);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '', refPassword: '' },
    resolver: joiResolver(schema),
  });
  const submit = async data => {
    dispatch(register(data));
    reset();
  };

  return (
    <>
      <RegisterHeader
        title="Sign Up"
        errorMessage="User with that email is already exist!"
        selector={selectors.getSignUpError}
      />
      <Paper className={styles.wrapper}>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
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
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Email Address*"
                type="text"
                size="small"
                autoComplete="off"
                className={styles.input}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Password*"
                type="password"
                size="small"
                autoComplete="off"
                className={styles.input}
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
            )}
          />
          <Controller
            name="refPassword"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Confirm password*"
                type="password"
                size="small"
                autoComplete="off"
                className={styles.input}
                error={!!errors.refPassword}
                helperText={errors?.refPassword?.message}
              />
            )}
          />
          <ContainedBtn
            variant="contained"
            type="submit"
            loading={isLoading}
            className={styles.btn}
          >
            sign up
          </ContainedBtn>
        </form>
        <Link to="/login" className={styles.link}>
          Already have an account? Log in
        </Link>
      </Paper>
    </>
  );
}
