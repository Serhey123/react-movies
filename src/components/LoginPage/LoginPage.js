import styles from './LoginPage.module.css';
import FormInput from '../FormInput/FormInput';
import { ContainedBtn } from 'components/StyledBtn/StyledBtn';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import RegisterHeader from 'components/RegisterHeader/RegisterHeader';
import { selectors } from 'redux/auth';

const schema = Joi.object({
  password: Joi.string().min(8),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'ua'] },
  }),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: joiResolver(schema),
  });

  const submit = async data => {
    dispatch(logIn(data));

    reset();
  };

  return (
    <>
      <RegisterHeader
        title="Log In"
        errorMessage="Invalid email or password!"
        selector={selectors.getLoginError}
      />
      <Paper className={styles.wrapper}>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
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
          <ContainedBtn
            variant="contained"
            type="submit"
            className={styles.btn}
          >
            log in
          </ContainedBtn>
        </form>
        <Link to="/signup" className={styles.link}>
          Don't have an account? Sign Up
        </Link>
      </Paper>
    </>
  );
}
