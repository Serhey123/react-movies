import styles from './CastList.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { imagePicker } from '../../utils/imagePicker';
import { Oval } from 'react-loader-spinner';
import { Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux/movies';

export default function CastList({ id }) {
  const dispatch = useDispatch();
  const actors = useSelector(selectors.getCurrentMovieCast);
  const isLoading = useSelector(selectors.getLoader);

  useEffect(() => {
    dispatch(operations.fetchCurrentMovieCast(id));
  }, [id, dispatch]);

  if (actors.length > 0) {
    return (
      <>
        <ul className={styles.list}>
          {actors.map(actr => (
            <li key={actr.character + actr.id} className={styles.list__item}>
              <Card className={styles.card}>
                <CardMedia
                  className={styles.img}
                  image={imagePicker(actr.profile_path)}
                  title={`${actr.name}`}
                />
                <CardContent className={styles.content}>
                  <Typography gutterBottom variant="p" component="p">
                    {actr.name}
                  </Typography>
                  {actr.character && (
                    <Typography gutterBottom variant="p" component="p">
                      ({actr.character})
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (isLoading) {
    return (
      <Oval
        height={50}
        width={50}
        color="#000"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        secondaryColor="#f0"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    );
  }

  if (actors.length === 0) {
    return (
      <Alert severity="error">
        <AlertTitle>Sorry</AlertTitle>
        Nothing found :(
      </Alert>
    );
  }
}
